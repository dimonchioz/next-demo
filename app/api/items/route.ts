import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Item {
  id: number;
  name: string;
  description: string;
}

interface ApiResponse {
  items: Item[];
  totalItems: number;
}

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const filePath = path.join(process.cwd(), "data", "item.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const items = JSON.parse(jsonData).lists;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedItems = items.slice(startIndex, endIndex);

  const response: ApiResponse = {
    items: paginatedItems,
    totalItems: items.length,
  };

  return NextResponse.json(response);
}
