export const getTechnologyData = async (technologyId) => {
  const fs = require("fs");
  const path = require("path");

  const filePath = path.join(process.cwd(), "technologyData.json");
  const data = await fs.promises.readFile(filePath, "utf-8");
  const jsonData = await JSON.parse(data);

  return jsonData.technology.find((item) => item.href === technologyId);
};
