import core from "@actions/core";
// import github from "@actions/github";
// import exec from "@actions/exec";

// console.log("core, github, exec:", core, github, exec);

(function run(): void {
  core?.notice("Hello!");
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
