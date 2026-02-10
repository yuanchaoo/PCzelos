import FooterCar from "@/components/FooterCar";

const footerActions = ["Product", "Scenarios", "Resources", "About us"];

export default function HomeFooterSection() {
  return (
    <section className="full-bleed flex min-h-[100svh] flex-col bg-white">
      <div className="bg-[#222943]">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-[50px] pt-[50px] md:px-10 xl:px-[100px]">
          <h2
            className="text-[60px] font-bold leading-tight text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="block">Let&apos;s explore the new trends</span>
            <span className="block">in future logistics</span>
          </h2>
          <p
            className="mt-[30px] max-w-[980px] text-[24px] font-normal text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            To enable governments and enterprises to move goods safely,
            efficiently, and sustainably through autonomous logistics
          </p>
          <div className="mb-[50px] mt-[30px] flex items-center gap-[15px]">
            <button
              type="button"
              className="h-[34px] w-[152px] rounded-[3px] border border-white text-[16px] font-medium text-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Partner With Us
            </button>
            <button
              type="button"
              className="h-[34px] w-[152px] rounded-[3px] bg-white text-[16px] font-medium text-[#004BCC]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex-1 bg-white">
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 -translate-y-1/2">
          <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-[100px]">
            <FooterCar />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-[100px]">
          <div
            className="flex flex-col gap-[40px] pb-[40px] pt-[50px] md:flex-row md:items-stretch md:justify-between"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <div className="flex h-full flex-col gap-[24px]">
              <img
                src="/footerlogo.png"
                alt="ZelosTech"
                className="h-[34px] w-auto self-start -ml-[4px] object-contain object-left brightness-0 saturate-100"
              />
              <div
                className="mt-auto space-y-[15px] pt-[10px] text-[14px] font-normal text-[#8E919F]"
                style={{ fontFamily: "PingFang SC, var(--font-inter)" }}
              >
                <div className="flex items-center gap-[15px]">
                  <img
                    src="/icon_location_s.svg"
                    alt=""
                    className="h-[20px] w-[20px]"
                  />
                  <span>
                    Singapore: 2 Science Park Drive, #02-08 Ascent, Singapore
                    118222
                  </span>
                </div>
                <div className="flex items-center gap-[15px]">
                  <img
                    src="/icon_communicate_s.svg"
                    alt=""
                    className="h-[20px] w-[20px]"
                  />
                  <span>marketing@zelostech.com | sales@zelostech.com</span>
                </div>
              </div>
            </div>

            <div className="mt-[30px] w-[180px] pl-[15px] md:ml-auto">
              <div className="flex flex-col gap-[14px]">
                {footerActions.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="group flex items-center gap-[8px] text-[24px] font-semibold text-[#1D2433] transition-colors duration-200 hover:text-[#1F62FF]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span>{label}</span>
                    <img
                      src="/icon_next_2xs.svg"
                      alt=""
                      className="h-[24px] w-[24px] -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-t border-[#E6E7EA] bg-[#FAFAFB]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <div className="mx-auto flex h-[92px] w-full max-w-[1440px] flex-col gap-4 px-6 py-[20px] text-[13px] text-[#9AA0AA] md:flex-row md:items-center md:justify-between md:px-10 xl:px-[100px]">
          <div className="flex flex-wrap items-center gap-y-[6px]">
            <span>© 2026 Zelostech (Singapore) PTE. LTD. All Rights Reserved.</span>
            <span className="ml-[10px] inline-flex h-[9px] w-[1px] rounded-full bg-[#040B29]/30" />
            <span className="ml-[10px] text-[#9AA0AA] transition-colors duration-200 hover:text-[#1F62FF]">
              Cookie Policy
            </span>
            <span className="mx-[10px] inline-flex h-[9px] w-[1px] rounded-full bg-[#040B29]/30" />
            <span className="text-[#9AA0AA] transition-colors duration-200 hover:text-[#1F62FF]">
              Terms of Use
            </span>
            <span className="mx-[10px] inline-flex h-[9px] w-[1px] rounded-full bg-[#040B29]/30" />
            <span className="text-[#9AA0AA] transition-colors duration-200 hover:text-[#1F62FF]">
              Privacy Policy
            </span>
          </div>
          <div className="flex items-center gap-[20px] text-[#555A6E]">
            <span className="inline-flex h-[32px] w-[32px] items-center justify-center text-[#555A6E] transition-colors duration-200 hover:text-[#1F62FF]">
              <svg
                className="h-[32px] w-[32px]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M22.66 5.60059H26.1886L18.4798 14.4113L27.5486 26.4006H20.4478L14.8862 19.1291L8.5224 26.4006H4.99175L13.2371 16.9766L4.53735 5.60059H11.8184L16.8456 12.247L22.66 5.60059ZM21.4216 24.2886H23.3768L10.756 7.60166H8.65785L21.4216 24.2886Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="inline-flex h-[32px] w-[32px] items-center justify-center text-[#555A6E] transition-colors duration-200 hover:text-[#1F62FF]">
              <svg
                className="h-[32px] w-[32px]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9.85242 12.165V27.6494H4.69617V12.165H9.85242ZM10.1805 7.38379C10.191 8.14421 9.92794 8.77962 9.39148 9.29004C8.85502 9.80046 8.14929 10.0557 7.27429 10.0557H7.24304C6.38888 10.0557 5.70138 9.80046 5.18054 9.29004C4.65971 8.77962 4.39929 8.14421 4.39929 7.38379C4.39929 6.61296 4.66752 5.97494 5.20398 5.46973C5.74044 4.96452 6.44096 4.71191 7.30554 4.71191C8.17013 4.71191 8.86283 4.96452 9.38367 5.46973C9.9045 5.97493 10.1701 6.61296 10.1805 7.38379ZM28.3993 18.7744V27.6494H23.2587V19.3682C23.2587 18.2744 23.0477 17.4176 22.6259 16.7979C22.204 16.1781 21.5451 15.8682 20.6493 15.8682C19.993 15.8682 19.4436 16.0479 19.0009 16.4072C18.5581 16.7666 18.2274 17.2119 18.0087 17.7432C17.8941 18.0557 17.8368 18.4775 17.8368 19.0088V27.6494H12.6962C12.717 23.4932 12.7274 20.1234 12.7274 17.54C12.7274 14.9567 12.7222 13.415 12.7118 12.915L12.6962 12.165H17.8368V14.415H17.8055C18.0139 14.0817 18.2274 13.79 18.4462 13.54C18.6649 13.29 18.9592 13.0192 19.329 12.7275C19.6988 12.4359 20.1519 12.2093 20.6884 12.0479C21.2248 11.8864 21.8212 11.8057 22.4774 11.8057C24.2587 11.8057 25.691 12.3968 26.7743 13.5791C27.8576 14.7614 28.3993 16.4932 28.3993 18.7744Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="inline-flex h-[32px] w-[32px] items-center justify-center text-[#555A6E] transition-colors duration-200 hover:text-[#1F62FF]">
              <svg
                className="h-[32px] w-[32px]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M27.916 11.068C27.8953 10.071 27.7046 9.08481 27.352 8.152C27.0645 7.34518 26.5966 6.61463 25.984 6.016C25.3837 5.41119 24.6589 4.94437 23.86 4.648C22.9308 4.29718 21.9489 4.10648 20.956 4.084C19.672 4 19.264 4 16 4C12.76 4 12.4 4 11.068 4.072C10.075 4.09401 9.09303 4.28473 8.164 4.636C7.35933 4.93363 6.63007 5.40479 6.028 6.016C5.41886 6.61509 4.94789 7.33998 4.648 8.14C4.29718 9.06915 4.10648 10.0511 4.084 11.044C4 12.34 4 12.748 4 16C4 19.252 4 19.672 4.072 20.944C4.09265 21.941 4.28339 22.9272 4.636 23.86C4.93905 24.6613 5.41422 25.3863 6.028 25.984C6.62362 26.5917 7.34427 27.0626 8.14 27.364C9.073 27.7159 10.0591 27.9066 11.056 27.928C12.4 28 12.748 28 16 28C19.252 28 19.672 28 20.944 27.928C21.941 27.9073 22.9272 27.7166 23.86 27.364C24.655 27.0546 25.3769 26.5833 25.9801 25.9801C26.5833 25.3769 27.0546 24.655 27.364 23.86C27.7162 22.9271 27.9069 21.941 27.928 20.944C27.928 19.66 28 19.252 28 16C28 12.748 28 12.4 27.916 11.068ZM25.78 20.8C25.7744 21.562 25.6363 22.3173 25.372 23.032C25.1777 23.5494 24.8702 24.0168 24.472 24.4C24.084 24.7981 23.6128 25.1055 23.092 25.3C22.3771 25.5636 21.622 25.7016 20.86 25.708C19.588 25.708 19.216 25.78 16.06 25.78C12.904 25.78 12.46 25.78 11.26 25.708C10.498 25.7024 9.74274 25.5643 9.028 25.3C8.48914 25.1138 8.00048 24.8058 7.6 24.4C7.20188 24.012 6.89453 23.5408 6.7 23.02C6.42524 22.3111 6.27503 21.56 6.256 20.8C6.256 19.528 6.184 19.156 6.184 16C6.184 12.844 6.184 12.4 6.256 11.2C6.25603 10.4218 6.39417 9.64987 6.664 8.92C6.87536 8.41665 7.19492 7.96599 7.6 7.6C7.97122 7.18424 8.43032 6.85632 8.944 6.64C9.66651 6.37367 10.43 6.2356 11.2 6.232C12.46 6.232 12.844 6.16 16 6.16C19.156 6.16 19.6 6.16 20.8 6.232C21.562 6.2374 22.3173 6.37547 23.032 6.64C23.5537 6.83272 24.0253 7.14031 24.412 7.54C24.8101 7.92798 25.1175 8.39924 25.312 8.92C25.6016 9.64635 25.76 10.4183 25.78 11.2C25.78 12.472 25.852 12.844 25.852 16C25.852 19.156 25.84 19.6 25.78 20.8Z"
                  fill="currentColor"
                />
                <path
                  d="M20.9922 9.59137C20.9922 9.97328 21.1439 10.3395 21.414 10.6096C21.684 10.8797 22.0503 11.0314 22.4322 11.0314C22.8141 11.0314 23.1804 10.8797 23.4504 10.6096C23.7205 10.3395 23.8722 9.97328 23.8722 9.59137C23.8722 9.20946 23.7205 8.84319 23.4504 8.57313C23.1804 8.30308 22.8141 8.15137 22.4322 8.15137C22.0503 8.15137 21.684 8.30308 21.414 8.57313C21.1439 8.84319 20.9922 9.20946 20.9922 9.59137Z"
                  fill="currentColor"
                />
                <path
                  d="M16.0001 9.83208C14.7812 9.83682 13.591 10.2026 12.5799 10.8832C11.5687 11.5638 10.7819 12.5288 10.3187 13.6563C9.85557 14.7837 9.73684 16.0232 9.97754 17.218C10.2182 18.4129 10.8076 19.5097 11.6711 20.3699C12.5347 21.2301 13.6337 21.8152 14.8296 22.0513C16.0254 22.2873 17.2643 22.1638 18.39 21.6962C19.5156 21.2287 20.4775 20.4381 21.1542 19.4243C21.8309 18.4105 22.1921 17.219 22.1921 16.0001C22.1921 15.1881 22.0318 14.384 21.7203 13.6341C21.4088 12.8842 20.9523 12.2032 20.377 11.6301C19.8017 11.0571 19.119 10.6032 18.3678 10.2947C17.6167 9.98613 16.8121 9.82892 16.0001 9.83208ZM16.0001 19.9961C15.2108 19.9913 14.4406 19.753 13.7866 19.311C13.1326 18.869 12.6242 18.2433 12.3254 17.5127C12.0266 16.7821 11.9509 15.9794 12.1078 15.2059C12.2647 14.4323 12.6472 13.7226 13.207 13.1661C13.7667 12.6097 14.4788 12.2314 15.2533 12.0792C16.0278 11.9269 16.83 12.0075 17.5588 12.3106C18.2876 12.6137 18.9102 13.1259 19.3483 13.7825C19.7863 14.4391 20.0201 15.2108 20.0201 16.0001C20.0201 16.5269 19.9159 17.0485 19.7136 17.5348C19.5113 18.0212 19.2148 18.4628 18.8412 18.8342C18.4676 19.2056 18.0242 19.4994 17.5367 19.6988C17.0491 19.8982 16.5269 19.9992 16.0001 19.9961Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="inline-flex h-[32px] w-[32px] items-center justify-center text-[#555A6E] transition-colors duration-200 hover:text-[#1F62FF]">
              <svg
                className="h-[32px] w-[32px]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M30 15.9123C30 15.8436 30 15.7654 29.9969 15.6748C29.9938 15.4217 29.9875 15.1373 29.9813 14.8342C29.9563 13.9623 29.9125 13.0936 29.8438 12.2748C29.75 11.1467 29.6125 10.2061 29.425 9.4998C29.025 8.00293 27.85 6.8248 26.3531 6.42168C25.4687 6.18418 23.7375 6.0373 21.3 5.94668C20.1406 5.90293 18.9 5.8748 17.6594 5.85918C17.225 5.85293 16.8219 5.8498 16.4594 5.84668H15.5406C15.1781 5.8498 14.775 5.85293 14.3406 5.85918C13.1 5.8748 11.8594 5.90293 10.7 5.94668C8.2625 6.04043 6.52812 6.1873 5.64687 6.42168C4.15312 6.82168 2.975 7.9998 2.575 9.4998C2.38438 10.2061 2.25 11.1467 2.15625 12.2748C2.0875 13.0936 2.04375 13.9623 2.01875 14.8342C2.00937 15.1373 2.00625 15.4217 2.00312 15.6748C2.00312 15.7654 2 15.8436 2 15.9123V16.0873C2 16.1561 2 16.2342 2.00312 16.3248C2.00625 16.5779 2.0125 16.8623 2.01875 17.1654C2.04375 18.0373 2.0875 18.9061 2.15625 19.7248C2.25 20.8529 2.3875 21.7936 2.575 22.4998C2.975 23.9967 4.15 25.1779 5.64687 25.5779C6.52812 25.8154 8.2625 25.9623 10.7 26.0529C11.8594 26.0967 13.1 26.1248 14.3406 26.1404C14.775 26.1467 15.1781 26.1498 15.5406 26.1529H16.4594C16.8219 26.1498 17.225 26.1467 17.6594 26.1404C18.9 26.1248 20.1406 26.0967 21.3 26.0529C23.7375 25.9592 25.4719 25.8123 26.3531 25.5779C27.85 25.1779 29.025 23.9998 29.425 22.4998C29.6156 21.7936 29.75 20.8529 29.8438 19.7248C29.9125 18.9061 29.9563 18.0373 29.9813 17.1654C29.9906 16.8623 29.9938 16.5779 29.9969 16.3248C29.9969 16.2342 30 16.1561 30 16.0873V15.9998V15.9123ZM27.75 16.0748C27.75 16.1404 27.75 16.2123 27.7469 16.2967C27.7438 16.5404 27.7375 16.8092 27.7313 17.0998C27.7094 17.9311 27.6656 18.7623 27.6 19.5342C27.5156 20.5404 27.3969 21.3654 27.25 21.9186C27.0563 22.6404 26.4875 23.2123 25.7687 23.4029C25.1125 23.5779 23.4594 23.7186 21.2125 23.8029C20.075 23.8467 18.85 23.8748 17.6281 23.8904C17.2 23.8967 16.8031 23.8998 16.4469 23.8998H15.5531C15.1969 23.8967 14.8 23.8936 14.3719 23.8904C13.15 23.8748 11.9281 23.8467 10.7875 23.8029C8.54063 23.7154 6.88437 23.5779 6.23125 23.4029C5.5125 23.2092 4.94375 22.6404 4.75 21.9186C4.60313 21.3654 4.48438 20.5404 4.4 19.5342C4.33438 18.7623 4.29375 17.9311 4.26875 17.0998C4.25938 16.8092 4.25625 16.5373 4.25313 16.2967C4.25313 16.2123 4.25 16.1373 4.25 16.0748V15.9811V15.9248C4.25 15.8592 4.25 15.7873 4.25313 15.7029C4.25625 15.4592 4.2625 15.1904 4.26875 14.8998C4.29063 14.0686 4.33438 13.2373 4.4 12.4654C4.48438 11.4592 4.60313 10.6342 4.75 10.0811C4.94375 9.35918 5.5125 8.7873 6.23125 8.59668C6.8875 8.42168 8.54063 8.28105 10.7875 8.19668C11.925 8.15293 13.15 8.1248 14.3719 8.10918C14.8 8.10293 15.1969 8.0998 15.5531 8.0998H16.4469C16.8031 8.10293 17.2 8.10605 17.6281 8.10918C18.85 8.1248 20.0719 8.15293 21.2125 8.19668C23.4594 8.28418 25.1156 8.42168 25.7687 8.59668C26.4875 8.79043 27.0563 9.35918 27.25 10.0811C27.3969 10.6342 27.5156 11.4592 27.6 12.4654C27.6656 13.2373 27.7063 14.0686 27.7313 14.8998C27.7406 15.1904 27.7438 15.4623 27.7469 15.7029C27.7469 15.7873 27.75 15.8623 27.75 15.9248V16.0748Z"
                  fill="currentColor"
                />
                <path
                  d="M13.2188 18.4486C13.2188 19.2199 14.055 19.7009 14.7217 19.3129L18.9723 16.8395C19.6375 16.4524 19.6344 15.4904 18.9667 15.1077L14.7161 12.6709C14.0494 12.2887 13.2188 12.77 13.2188 13.5384V18.4486Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
