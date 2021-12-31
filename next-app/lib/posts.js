import fs from "fs";
import path from "path";
import matter from "gray-matter";

const datasDirectory = path.join(process.cwd(), "datas");

export function getSortedPostsData() {
  // Get file names under /datas
  const fileNames = fs.readdirSync(datasDirectory);
  const allDatas = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(datasDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort datas by date
  return allDatas.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(datasDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: "ssg-ssr",
  //     },
  //   },
  //   {
  //     params: {
  //       id: "pre-rendering",
  //     },
  //   },
  // ];
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
