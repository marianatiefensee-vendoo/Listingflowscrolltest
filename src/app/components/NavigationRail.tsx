import { useState } from "react";
import svgPathsDocked from "../../imports/svg-4lm10evqgv";
import svgPathsExpanded from "../../imports/svg-u0uasmzsis";

interface NavigationRailProps {
  isExpanded: boolean;
  onToggle: () => void;
}

type RailIconName =
  | "inventory"
  | "automations"
  | "analytics"
  | "marketplaces"
  | "bulkActions"
  | "settings";

const VENDOO_LOGO_ASSET =
  "https://blog.vendoo.co/hubfs/raw_assets/public/Vendoo_March2021/images/5f6d234c038cd059bdcfd890_Vendoo%20logo%20A%20Sellers%20Best%20Friend.svg";

const NAV_ITEMS: Array<{ key: RailIconName; label: string; active?: boolean }> = [
  { key: "inventory", label: "Inventory", active: true },
  { key: "automations", label: "Automations" },
  { key: "analytics", label: "Analytics" },
  { key: "marketplaces", label: "Marketplaces" },
  { key: "bulkActions", label: "Bulk Actions" },
];

function RailLogo() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[44px] px-[20px] relative shrink-0 w-full" data-name="Vendoo Logo">
      <img
        alt=""
        aria-hidden="true"
        className="block h-[60px] w-[60px] shrink-0"
        src={VENDOO_LOGO_ASSET}
      />
    </div>
  );
}

function RailTextLabel({
  children,
  active = false,
}: {
  children: string;
  active?: boolean;
}) {
  return (
    <p
      className={`font-['Lexend',sans-serif] text-[14px] font-[var(--font-weight-medium)] leading-[20px] tracking-[0.1px] ${
        active ? "text-[#503F86]" : "text-muted-foreground"
      }`}
    >
      {children}
    </p>
  );
}

function MenuIcon({ expanded }: { expanded: boolean }) {
  if (expanded) {
    return (
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="menu open">
        <div className="absolute inset-[20.83%_8.86%_20.83%_10.42%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3726 14">
            <g id="Icon">
              <path d={svgPathsExpanded.p14331c80} fill="#1D1A24" />
              <path d={svgPathsExpanded.p28422b80} fill="#1D1A24" />
              <path d={svgPathsExpanded.p38eecc00} fill="#1D1A24" />
              <path d={svgPathsExpanded.p29907780} fill="#1D1A24" />
            </g>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="menu">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
          <g id="Icon">
            <path d={svgPathsDocked.p306fec00} fill="#1D1A24" />
            <path d={svgPathsDocked.p13e7780} fill="#1D1A24" />
            <path d={svgPathsDocked.p12f04500} fill="#1D1A24" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PlusIcon({ expanded }: { expanded: boolean }) {
  if (expanded) {
    return (
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus-circle">
        <div className="absolute inset-[4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <g id="Icon">
              <path d={svgPathsExpanded.p3af8180} fill="#FFFFFF" />
              <path clipRule="evenodd" d={svgPathsExpanded.p389ffd00} fill="#FFFFFF" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus-circle">
      <div className="absolute inset-[4.17%]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Icon">
            <path d={svgPathsDocked.p28fdfe80} fill="#FFFFFF" />
            <path clipRule="evenodd" d={svgPathsDocked.p396e0c00} fill="#FFFFFF" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RailIcon({
  name,
  expanded,
  active = false,
}: {
  name: RailIconName;
  expanded: boolean;
  active?: boolean;
}) {
  const paths = (expanded ? svgPathsExpanded : svgPathsDocked) as Record<string, string>;
  const color = active ? "#503F86" : "#494455";

  switch (name) {
    case "inventory":
      return (
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
          <div className="absolute inset-[4.17%_8.33%_3.83%_8.33%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0781">
              <path clipRule="evenodd" d={paths.p51a8e80} fill={color} fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
      );
    case "automations":
      return (
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
            <div className="absolute inset-[-5%_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0001">
                <path d={paths.p32522b00} id="Icon" stroke={active ? "#503F86" : "#1D1A24"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      );
    case "analytics":
      return (
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={paths.p1f65dc00} fill={color} id="Icon" />
            </svg>
          </div>
        </div>
      );
    case "marketplaces":
      return (
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
          <div className="absolute inset-[4.17%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path clipRule="evenodd" d={paths.p4fdf6f0} fill={color} fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
      );
    case "bulkActions":
      return (
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
          <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.666 18.666">
              <g id="Icon">
                <path clipRule="evenodd" d={paths.p3474f00} fill={color} fillRule="evenodd" />
                <path d={paths.p1bffaa40} fill={color} />
              </g>
            </svg>
          </div>
        </div>
      );
    case "settings":
      return (
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Icon">
              <path clipRule="evenodd" d={paths.p258bb200} fill={color} fillRule="evenodd" />
              <path clipRule="evenodd" d={paths.p2c727d00} fill={color} fillRule="evenodd" />
            </g>
          </svg>
        </div>
      );
  }
}

function ExpandedNavItem({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: RailIconName;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`content-stretch flex items-center relative shrink-0 ${
        active ? "rounded-[12px] bg-[#C3B0FF]" : ""
      }`}
      data-name={`Nav item ${label}`}
    >
      <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0">
        <RailIcon active={active} expanded={true} name={icon} />
        <RailTextLabel active={active}>{label}</RailTextLabel>
      </div>
    </button>
  );
}

function DockedNavItem({
  icon,
  active = false,
}: {
  icon: RailIconName;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0"
      data-name={`Nav item ${icon}`}
    >
      <div
        className={`content-stretch flex items-center justify-center overflow-clip relative shrink-0 ${
          active ? "rounded-[5px] bg-[#C3B0FF]" : "rounded-[16px]"
        }`}
      >
        <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]">
          <RailIcon active={active} expanded={false} name={icon} />
        </div>
      </div>
    </button>
  );
}

function MenuToggle({
  expanded,
  onToggle,
  isHovered,
  onHoverChange,
}: {
  expanded: boolean;
  onToggle: () => void;
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
}) {
  return (
    <button
      type="button"
      className="block cursor-pointer relative shrink-0 size-[48px]"
      data-name="Icon Button Standard"
      onClick={onToggle}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
        {isHovered && (
          <div
            className="absolute inset-0 rounded-[100px] bg-foreground opacity-[0.08]"
            data-name="Hover-layer"
          />
        )}
        <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
          <MenuIcon expanded={expanded} />
        </div>
      </div>
    </button>
  );
}

function AddItemFab({ expanded }: { expanded: boolean }) {
  if (expanded) {
    return (
      <div className="content-stretch flex items-start relative shrink-0" data-name="Extended FAB">
        <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button-Filled">
          <div className="bg-primary content-stretch flex flex-col h-full items-center justify-center relative rounded-[5px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] shrink-0" data-name="Content">
            <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0" data-name="State - Layer">
              <PlusIcon expanded={true} />
              <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
                <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-primary-foreground tracking-[0.1px] whitespace-nowrap">
                  <p className="leading-[20px]">Add item</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[5px] shrink-0" data-name="FAB Button">
      <div className="bg-primary content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[5px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] shrink-0 size-[56px]" data-name="Content">
        <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
          <PlusIcon expanded={false} />
        </div>
      </div>
    </div>
  );
}

export default function NavigationRail({
  isExpanded,
  onToggle,
}: NavigationRailProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (isExpanded) {
    return (
      <div className="bg-sidebar content-stretch flex flex-col gap-[40px] items-start overflow-clip relative rounded-[16px] size-full" data-name="Navigation Rail">
        <RailLogo />

        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] px-[20px] relative shrink-0 w-full" data-name="Menu & FAB">
          <MenuToggle expanded={true} isHovered={isHovered} onHoverChange={setIsHovered} onToggle={onToggle} />
          <AddItemFab expanded={true} />
        </div>

        <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-full" data-name="Segments">
          {NAV_ITEMS.map((item) => (
            <ExpandedNavItem
              key={item.key}
              active={item.active}
              icon={item.key}
              label={item.label}
            />
          ))}
        </div>

        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px px-[20px] py-[44px] relative w-full" data-name="settings">
          <ExpandedNavItem active={false} icon="settings" label="Settings" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sidebar content-stretch flex flex-col gap-[40px] items-start overflow-clip relative rounded-[16px] size-full" data-name="Navigation Rail">
      <RailLogo />

      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] px-[20px] relative shrink-0" data-name="Menu & FAB">
        <MenuToggle expanded={false} isHovered={isHovered} onHoverChange={setIsHovered} onToggle={onToggle} />
        <AddItemFab expanded={false} />
      </div>

      <div className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col items-start min-h-px min-w-px px-[20px] relative w-full" data-name="Segments">
        {NAV_ITEMS.map((item) => (
          <DockedNavItem key={item.key} active={item.active} icon={item.key} />
        ))}
      </div>

      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px px-[20px] py-[56px] relative w-full" data-name="settings">
        <DockedNavItem icon="settings" />
      </div>
    </div>
  );
}
