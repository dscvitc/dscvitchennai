// Using the octokit API to get list of contributors to the Repo
// /api/contributors

import { Octokit } from "@octokit/rest";
import process from "process";

const api_key = process.env.OCTOKIT_API;
const octokit = new Octokit({
  auth: api_key,
});

export default function handler(req, res) {
  const data = async () => {
    const got = await octokit.rest.repos.listContributors({
      owner: "dscvitc",
      repo: "dscvitchennai",
    });
    res.status(200).json(got["data"]);
  };
  data();
}
