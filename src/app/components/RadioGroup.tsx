interface RadioGroupProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function RadioGroup({ label, value, options, onChange }: RadioGroupProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {/* Label */}
      <div className="flex flex-col font-['Lexend',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[var(--muted-foreground)] text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">{label}</p>
      </div>

      {/* Radio Options */}
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
        {options.map((option) => {
          const isSelected = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer"
            >
              {/* Radio Circle */}
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke={isSelected ? "var(--primary)" : "var(--muted-foreground)"}
                    strokeWidth="2"
                    fill="none"
                  />
                  {isSelected && (
                    <circle cx="10" cy="10" r="5" fill="var(--primary)" />
                  )}
                </svg>
              </div>
              {/* Label */}
              <div className={`flex flex-col font-['Lexend',sans-serif] justify-center leading-[0] relative shrink-0 text-[var(--text-sm)] tracking-[0.25px] whitespace-nowrap ${
                isSelected ? 'font-medium text-[var(--foreground)]' : 'font-normal text-[var(--muted-foreground)]'
              }`}>
                <p className="leading-[20px]">{option}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
