"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
// import github from "@actions/github";
// import exec from "@actions/exec";
// console.log("core, github, exec:", core, github, exec);
(function run() {
  core_1.default === null || core_1.default === void 0 ? void 0 : core_1.default.notice("Hello!"); //* Which works?
  core_1?.notice("Hello!"); //* Which works?
  // // 1) Get some input values
  // const bucket: string = core.getInput("bucket", { required: true });
  // const bucketRegion: string = core.getInput("bucket-region", { required: true });
  // const distFolder: string = core.getInput("dist-folder", { required: true });
  // // 2) Upload files
  // const s3Uri: string = `s3://${bucket}`;
  // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
  // const websiteUrl: string = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
  // core.setOutput("website-url", websiteUrl); // echo "website-url=..." >> $GITHUB_OUTPUT
})();
