import Client from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();
import NotionAPI from "notion-client";

const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionSecret = process.env.NOTION_SECRET;

if (!notionDatabaseId || !notionSecret) {
  throw Error("Must define NOTION_SECRET and NOTION_DATABASE_ID in env");
}

// Initializing the Notion client with your secret
const notion = new Client.Client({
  auth: notionSecret,
});
export const notionClient = new NotionAPI.NotionAPI({
  apiBaseUrl: "https://www.notion.so/api/v3",
  authToken: process.env.NOTION_TOKEN,
  activeUser: process.env.NOTION_USER,
});

export const getAllPages = async () => {
  try {
    const data = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        // url: "public_url",

        property: "Published",
        // property: "public_url",
        // select: {
        //   equals: 'true',
        // },
        date: {
          is_not_empty: true,
        },
      },
    });
    console.log(data);

    return data;
    // return await notion.blocks.retrieve({
    //   block_id: "19a012d73db34c0b895a58b6d98cb14b",
    // });
  } catch (error) {
    throw error;
  }
};

export const getPageBlock = async (id = "4c6791d7460b434ab1b83057994564d7") => {
  try {
    return await notionClient.getPage(id);
  } catch (error) {
    throw error;
  }
};
