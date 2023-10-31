// Using the octokit API to get list of contributors to the Repo
// /api/contributors
import { Octokit } from "@octokit/rest";
import { NextResponse } from "next/server";
import process from "process";

const api_key = process.env.OCTOKIT_API;
const octokit = new Octokit({
  auth: api_key,
});

export async function GET() {
  try {
    const data = await octokit.rest.repos.listContributors({
      owner: "dscvitc",
      repo: "dscvitchennai",
    });
    return NextResponse.json(
      { list: data },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error },
      {
        status: 500,
      }
    );
  }
}
