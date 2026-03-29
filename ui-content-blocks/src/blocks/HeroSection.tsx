import { FormLeadSignup, type FormLeadSignupValues } from "@ui/forms/FormLeadSignup";

// Asset URLs from Figma MCP (captured 2026-03-28, valid ~7 days)
const LOGO_MARK = "https://www.figma.com/api/mcp/asset/9872120f-e748-46ca-bc81-d5eff0a81a2f";
const LOGO_TEXT = "https://www.figma.com/api/mcp/asset/80353e93-3a33-4f2d-8bd8-be76b018682f";
const WATERMARK_MASK = "https://www.figma.com/api/mcp/asset/72724ad2-e6f6-49cb-a6db-29af41dd1a01";
const WATERMARK_BG = "https://www.figma.com/api/mcp/asset/c4ebf77b-2a66-4b98-87fa-66cacd4c6ca1";
const CHECK_ICON = "https://www.figma.com/api/mcp/asset/22197ffb-addc-4a9f-9293-15a494d78892";

const LIST_ITEMS = [
  "Join a community of 70,000+ working graduates",
  "Learn online or on campus",
  "Transfer students welcome",
  "Financial aid available",
];

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M2.5 8h11M9.5 3.5 14 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface HeroSectionProps {
  onSubmit?: (values: FormLeadSignupValues) => void;
}

export function HeroSection({ onSubmit }: HeroSectionProps) {
  return (
    <div className="bg-brand relative overflow-hidden w-full flex flex-col">

      {/* Background watermark — hidden on small screens, shown lg+ */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{ right: -122, top: -5, width: 944, height: 944, overflow: "clip" }}
      >
        <div
          className="absolute inset-0"
          style={{
            maskImage: `url('${WATERMARK_MASK}')`,
            maskSize: "944px 944px",
            maskPosition: "0 0",
            maskRepeat: "no-repeat",
          }}
        >
          <img src={WATERMARK_BG} alt="" className="absolute block max-w-none size-full" />
        </div>
      </div>

      {/* Header / Nav bar */}
      <div className="relative flex items-center px-6 sm:px-8 lg:px-12 xl:px-[120px] py-4 shrink-0">
        <div className="flex items-center gap-[10px] h-[50px]">
          <img src={LOGO_MARK} alt="" className="size-[50px] shrink-0" />
          <img src={LOGO_TEXT} alt="National Louis University" className="h-[38px] w-[102px] shrink-0" />
        </div>
      </div>

      {/* Main content — stacked on mobile, side-by-side on lg+ */}
      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-8 px-6 sm:px-8 lg:px-12 xl:px-[120px] pt-8 pb-12 xl:pb-[72px]">

        {/* Left — heading, paragraph, bullet list */}
        <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-[580px] lg:shrink-0">

          {/* Heading + body copy */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <h1 className="font-['Barlow_Condensed',sans-serif] font-semibold text-[36px] sm:text-[44px] lg:text-[56px] xl:text-[64px] leading-none uppercase text-white">
              Advance Your Career with an NLU Education
            </h1>
            <p className="font-barlow text-base sm:text-lg xl:text-[20px] leading-[1.4] text-white/85 max-w-[555px]">
              No matter where you are in your working life, National Louis University offers an
              educational experience that meets the moment—and prepares you for what's next.
            </p>
          </div>

          {/* Feature list */}
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {LIST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2 min-h-7">
                <img src={CHECK_ICON} alt="" className="size-6 shrink-0" />
                <span className="font-barlow font-semibold text-base sm:text-lg xl:text-[20px] leading-[1.4] text-white/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — lead signup form (full-width mobile, fixed 486px xl) */}
        <FormLeadSignup
          className="w-full sm:max-w-md lg:w-[400px] xl:w-[486px] lg:shrink-0"
          submitLabel={
            <span className="flex items-center justify-center gap-2">
              Find your next step forward
              <ArrowRightIcon />
            </span>
          }
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
