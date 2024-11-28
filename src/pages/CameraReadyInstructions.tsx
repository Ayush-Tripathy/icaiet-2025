export default function CameraReadyInstructions() {
  return (
    <div className="min-h-screen py-8 pt-32 px-3 sm:px-10 lg:px-20 font-[SatoshiRegular]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Camera-Ready Instructions</h1>
          <div className="h-1 w-20 bg-blue-500 mt-2"></div>
        </div>

        <div className="space-y-6">
          <p className="font-bold">
            Please note that the last date for uploading the final camera-ready
            manuscript is April 5, 2025, 23:59 IST.
          </p>
          <p className="font-bold">
            At least one author must complete the registration before deadline.
            See the:
            <a
              href="/registration"
              className="text-blue-400 hover:underline ml-1"
            >
              Registrations Page
            </a>{" "}
            for details.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            Step 1: Preparation of Camera Ready Manuscript
          </h2>

          <ol className="list-none space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                Authors must use the IEEE Template:
                <a
                  href="/conference-latex-template_10-17-19.zip"
                  className="text-blue-400 hover:underline mx-1"
                >
                  LaTex Template
                </a>
                or
                <a
                  href="/conference-template-a4.docx"
                  className="text-blue-400 hover:underline mx-1"
                >
                  Microsoft Word
                </a>
                Template to prepare their manuscripts. Use the A4 format. DO NOT
                use the US Letter format and do not paginate your paper.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                Revise your manuscript as per REVIEWERS' COMMENTS, which are
                intended to improve the quality of your paper before the final
                publication. The listed comments should be addressed carefully
                in your revision, it is mandatory for all authors to incorporate
                all the changes suggested by reviewers else their paper will be
                excluded from conference proceedings.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                Each paper must not exceed 6 pages including figures and
                references.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>Do not insert page numbers in your manuscript.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <div>
                <strong>Copyright Notice</strong>: You will also need to include
                a copyright notice at the bottom of the first page of your
                paper. The exact notice depends on the outcome of the copyright
                transfer process:
                <br />
                <br />
                <p>
                  For papers in which all authors are employed by the US
                  government, the copyright notice is:{" "}
                  <strong>
                    U.S. Government work not protected by U.S. copyright.
                  </strong>
                </p>
                <br />
                <p>
                  For papers in which all authors are employed by a Crown
                  government (UK, Canada, and Australia), the copyright notice
                  is: <strong>979-8-3315-2261-2/24/$31.00 ©2024 Crown</strong>
                </p>
                <br />
                <p>
                  For papers in which all authors are employed by the European
                  Union, the copyright notice is:{" "}
                  <strong>
                    979-8-3315-2261-2/24/$31.00 ©2024 European Union
                  </strong>
                </p>
                <br />
                <p>
                  For all other papers the copyright notice is:{" "}
                  <strong>979-8-3315-2261-2/24/$31.00 ©2024 IEEE</strong>
                </p>
                <br />
                <p>
                  MSWord users can use: 'Insert' -'Text box', insert the
                  appropriate copyright notice in the texbox, and place the box
                  (without border) at the bottom left on the first page. Again,
                  we suggest preparing your camera-ready version using LaTeX.
                </p>
                <br />
                <span>
                  LaTeX users can add the following lines just before \begin
                  {"{document}"} for the copyright notice to show up. What is
                  shown below is an example for the fourth copyright case above,{" "}
                  <strong>
                    in the other cases the copyright text should be adapted
                    accordingly.
                  </strong>
                  <div className="space-y-1 mt-2 overflow-x-hidden relative w-min">
                    <pre>\IEEEoverridecommandlockouts</pre>
                    <pre className="overflow-x-auto max-w-[calc(100vw-100px)] sm:break-words sm:whitespace-pre-wrap sm:max-w-full">
                      \IEEEpubid{"{"}\\makebox[\\columnwidth]{"{"}
                      979-8-3315-2261-2/24/$31.00~\\copyright{}2024 IEEE \\hfill
                      {"}"}\\hspace{"{"}\\columnsep{"}"}
                      \\makebox[\\columnwidth]{"{ }"}
                      {"}"}
                    </pre>
                  </div>
                </span>
              </div>
            </li>
          </ol>

          <p className="font-bold mt-6">
            In accordance with the IEEE policy, plagiarism in any form, at any
            level, is unacceptable. Therefore, the conference reserves the right
            to reject the final manuscript which is found to have high degree of
            plagiarism after registration without refund. IEEE policy requires
            that all accepted papers must be checked for plagiarism. This can be
            accomplished through the{" "}
            <a
              href="https://www.ieee.org/publications/rights/cross-check-portal.html"
              className="text-blue-400 hover:underline"
            >
              IEEE Crosscheck Portal
            </a>{" "}
            if copyright is owned by IEEE.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            Step 2: PDF eXpress paper validation
          </h2>

          <p>
            If you have not used PDF eXpress before, you will need to create an
            account first:
          </p>

          <p>
            After carefully checking if your manuscript conforms to IEEE Xplore
            guidelines, you need to get it approved by IEEE PDF eXpress. To this
            purpose, you can login (Enter Conference ID <strong>63599X</strong>)
            to the{" "}
            <a
              href="https://ieee-pdf-express.org/account/login?ReturnUrl=%2F"
              className="text-blue-400 hover:underline"
            >
              IEEE PDF eXpress page
            </a>{" "}
            for you to upload your paper for approval.
          </p>

          <ol className="list-none space-y-4 mt-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>Select the Create account</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                Enter the following:
                <ul className="list-none space-y-2 mt-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">○</span>
                    <span>
                      <strong>65052X</strong> for the Conference ID.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">○</span>
                    <span>Your email address.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">○</span>
                    <span>A password.</span>
                  </li>
                </ul>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>Continue to enter information as prompted.</span>
            </li>
          </ol>

          <p className="mt-4">
            First-time users of PDF eXpress need to follow the above steps.
            Previous users of PDF eXpress need to login using the same password
            that was used for previous IEEE conferences. Verify that your
            contact information is valid.
          </p>

          <p className="mt-4">
            After logging in, follow the on-screen instructions and upload the
            paper. If the paper conforms to all guidelines, you will receive an
            email with your Checked PDF or IEEE PDF eXpress Plus-converted PDF
            attached. This email will show if your file passed or failed.
          </p>

          <p>
            The file is labeled within its document properties as being
            'Certified by IEEE PDF eXpress'.
          </p>

          <p className="font-bold mt-4">
            This is the final camera-ready paper you will upload in the next
            step.
          </p>

          <p className="font-bold">
            Do not forget to include the Copyright Notice in your PDF (as shown
            in Step <strong>1</strong>), as changing the paper later invalidates
            the PDF eXpress.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            Step 3: Final Camera-ready Paper Upload on CMT
          </h2>

          <p>Upload of camera-ready manuscripts is handled through CMT:</p>

          <p>
            <a
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FISED2024"
              className="text-blue-400 hover:underline max-sm:break-words"
            >
              https://cmt3.research.microsoft.com/ISED2024
            </a>
          </p>

          <ul className="list-none space-y-4 mt-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                Login to{" "}
                <a
                  href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FISED2024"
                  className="text-blue-400 hover:underline"
                >
                  CMT
                </a>{" "}
                using your username and password.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                In the Author console, click on{" "}
                <strong>Create Camera Ready Submission.</strong>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                Upload your camera-ready manuscript produced during the PDF
                eXpress check (Step 2).
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>Click "Submit".</span>
            </li>
          </ul>

          <p className="mt-4">
            If you have multiple papers accepted at the conference, you will
            need to repeat these steps for each accepted paper.
          </p>

          <h2 className="text-2xl font-bold mt-8">Copyright Transfer</h2>

          <ul className="list-none space-y-4 mt-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                One copyright transfer form is required per each paper, not one
                per author!
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                Login to{" "}
                <a
                  href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FISED2024"
                  className="text-blue-400 hover:underline"
                >
                  CMT
                </a>{" "}
                using your username and password.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                In the Author console, click on{" "}
                <strong>Submit IEEE Copyright Form.</strong>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                Click on the link given on the webpage to redirect to IEEE
                Copyright Web Site.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>
                Follow the step-by-step instructions to sign the IEEE copyright
                form, and download the PDF copyright file.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>Upload the PDF copyright file on the CMT portal.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">■</span>
              <span>Click "Save".</span>
            </li>
          </ul>

          <p className="mt-4">
            If you have multiple papers accepted at the conference, you will
            need to repeat these steps for each accepted paper.
          </p>

          <p className="mt-6">
            Any difficulty with final camera-ready paper submission, please
            contact
            <a
              href="mailto:devendra@xim.edu.in"
              className="text-blue-400 hover:underline mx-1"
            >
              devendra@xim.edu.in
            </a>
            , <br className="max-sm:block hidden" />
            <a
              href="mailto:ashish@xim.edu.in"
              className="text-blue-400 hover:underline mx-1"
            >
              ashish@xim.edu.in
            </a>
            , or
            <a
              href="mailto:deanxcse_office@xim.edu.in"
              className="text-blue-400 hover:underline mx-1"
            >
              deanxcse_office@xim.edu.in
            </a>
            .
          </p>

          <p className="mt-6">
            <strong>Note:</strong> Ensure that the plagiarism level in your
            final camera-ready paper <strong>does not exceed 20%.</strong> This
            limit applies to the entire paper, without exceptions for any
            individual components. The conference and the IEEE will also check
            that you have adhered to the plagiarism upper bound before final
            acceptance.
          </p>
        </div>
      </div>
    </div>
  );
}
