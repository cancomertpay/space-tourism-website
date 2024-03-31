export const getDestinationData = async (destinationId) => {
  const fs = require("fs");
  const path = require("path");

  const filePath = path.join(process.cwd(), "destinationsData.json");
  const data = await fs.promises.readFile(filePath, "utf-8");
  const jsonData = await JSON.parse(data);
  return jsonData.destinations.find((item) => item.name === destinationId);
};
