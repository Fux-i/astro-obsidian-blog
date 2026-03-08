import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root, Image, PhrasingContent } from "mdast";
import path from "path";
import fs from "fs";
import { BLOG_PATH } from "../config";

interface RemarkSvgImagesOptions {
  enableDebug?: boolean;
}

/**
 * Remark插件：处理markdown中的SVG图片
 * 将SVG图片转换为HTML img标签，避免Astro的metadata提取错误
 */
export const remarkSvgImages: Plugin<[RemarkSvgImagesOptions?], Root> = (
  options = {}
) => {
  const { enableDebug = false } = options;

  return (tree, file) => {
    const currentFilePath = file.path || file.history?.[0];

    if (enableDebug) {
      console.log("Processing SVG images in:", currentFilePath);
    }

    visit(tree, "image", (node: Image, index, parent) => {
      const src = node.url;

      // 只处理SVG文件
      if (!src.toLowerCase().endsWith(".svg")) {
        return;
      }

      if (enableDebug) {
        console.log("Found SVG image:", src);
      }

      // 计算正确的图片URL路径
      let resolvedSrc = src;

      // 如果是相对路径，转换为绝对路径
      if (!src.startsWith("/") && !src.startsWith("http")) {
        if (currentFilePath) {
          const currentDir = path.dirname(currentFilePath);
          const absolutePath = path.resolve(currentDir, src);

          // 检查文件是否存在
          if (fs.existsSync(absolutePath)) {
            // 转换为相对于项目根的绝对URL路径
            const projectRoot = process.cwd();
            resolvedSrc = "/" + path.relative(projectRoot, absolutePath).replace(/\\/g, "/");
          }
        }
      }

      if (enableDebug) {
        console.log("Resolved SVG path:", resolvedSrc);
      }

      // 创建HTML img节点
      const htmlNode: PhrasingContent = {
        type: "html",
        value: `<img src="${resolvedSrc}" alt="${node.alt || ""}" />`,
      };

      // 替换原图片节点
      if (parent && typeof index === "number") {
        parent.children[index] = htmlNode;
      }
    });
  };
};

export default remarkSvgImages;