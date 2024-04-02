export const getCrewData = async (crewId) => {
  const fs = require("fs");
  const path = require("path");

  const filePath = path.join(process.cwd(), "crewsData.json");
  const data = await fs.promises.readFile(filePath, "utf-8");
  const jsonData = await JSON.parse(data);

  const crewIdParts = crewId.split("-");
  const formattedCrewId = crewIdParts
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");

  return jsonData.crew.find((item) => item.name === formattedCrewId);
};
