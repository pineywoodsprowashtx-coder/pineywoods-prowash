"use client";

import { useState } from "react";
import {
  Home,
  LayoutGrid,
  CloudRain,
  Sparkles,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";

// ============================================================================
// PRICING CONFIG — Single Source of Truth
// ============================================================================

const PRICING_CONFIG = {
  houseWashing: {
    label: "House Washing",
    subtitle: "Soft Wash System",
    unit: "sq ft",
    baseRate: 0.12,
    minPrice: 150,
    rangeBuffer: 0.2,
    min: 500,
    max: 5000,
    step: 100,
    defaultValue: 0,
    icon: "Home" as const,
  },
  concreteCleaning: {
    label: "Concrete Cleaning",
    subtitle: "Driveways & Sidewalks",
    unit: "sq ft",
    baseRate: 0.08,
    minPrice: 75,
    rangeBuffer: 0.18,
    min: 100,
    max: 3000,
    step: 50,
    defaultValue: 0,
    icon: "LayoutGrid" as const,
  },
  roofCleaning: {
    label: "Roof Cleaning",
    subtitle: "Soft Wash Treatment",
    unit: "sq ft",
    baseRate: 0.18,
    minPrice: 200,
    rangeBuffer: 0.25,
    min: 500,
    max: 4000,
    step: 100,
    defaultValue: 0,
    icon: "CloudRain" as const,
  },
  windowCleaning: {
    label: "Exterior Window Cleaning",
    subtitle: "Streak-Free Finish",
    unit: "windows",
    baseRate: 8.5,
    minPrice: 75,
    rangeBuffer: 0.2,
    min: 1,
    max: 60,
    step: 1,
    defaultValue: 0,
    icon: "Sparkles" as const,
  },
} as const;

type ServiceKey = keyof typeof PRICING_CONFIG;
type ServiceConfig = (typeof PRICING_CONFIG)[ServiceKey];

// ============================================================================
// Pure Calculation Function — Separated from UI
// ============================================================================

function calculateEstimate(
  quantity: number,
  config: ServiceConfig
): { low: number; high: number } {
  if (quantity <= 0) return { low: 0, high: 0 };
  const raw = quantity * config.baseRate;
  const low = Math.max(Math.round(raw), config.minPrice);
  const high = Math.round(low * (1 + config.rangeBuffer));
  return { low, high };
}

// ============================================================================
// Icon Map
// ============================================================================

const iconMap: Record<string, LucideIcon> = {
  Home,
  LayoutGrid,
  CloudRain,
  Sparkles,
};

// ============================================================================
// Service Card Component
// ============================================================================

function ServiceCard({
  serviceKey,
  config,
  value,
  onChange,
}: {
  serviceKey: ServiceKey;
  config: ServiceConfig;
  value: number;
  onChange: (value: number) => void;
}) {
  const Icon = iconMap[config.icon];
  const estimate = calculateEstimate(value, config);
  const isActive = value > 0;

  const fillPercent = isActive
    ? ((value - config.min) / (config.max - config.min)) * 100
    : 0;

  return (
    <div className="relative rounded-lg bg-[#001F3F] border-l-[3px] border-l-[#FFD700] p-4 md:p-5">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 p-2 rounded-md bg-[#001F3F]">
          <Icon className="w-6 h-6 text-[#FFD700]" strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold uppercase text-sm tracking-wide">
            {config.label}
          </h3>
          <p className="text-[#5B8DB8] text-xs mt-0.5">{config.subtitle}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="range"
              min={0}
              max={config.max}
              step={config.step}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer slider-thumb"
              style={{
                background: isActive
                  ? `linear-gradient(to right, #FFD700 0%, #FFD700 ${fillPercent}%, #27597C ${fillPercent}%, #27597C 100%)`
                  : "#27597C",
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              max={config.max}
              step={config.step}
              value={value || ""}
              onChange={(e) => {
                const val = Number(e.target.value);
                onChange(Math.min(Math.max(0, val), config.max));
              }}
              placeholder="0"
              className="w-16 px-2 py-1 text-sm text-white bg-[#27597C] border border-[#5B8DB8]/30 rounded text-center focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
            />
            <span className="text-[#6B7280] text-xs whitespace-nowrap min-w-[40px]">
              {config.unit}
            </span>
          </div>
        </div>

        <div className="h-6 flex items-center">
          {isActive ? (
            <p className="text-[#FFD700] font-bold text-lg">
              ${estimate.low.toLocaleString()} – $
              {estimate.high.toLocaleString()}
            </p>
          ) : (
            <p className="text-[#6B7280] text-sm italic">Slide to estimate</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Main Component — Homepage Section Version
// ============================================================================

export default function ServiceCostEstimator() {
  const [values, setValues] = useState<Record<ServiceKey, number>>({
    houseWashing: 0,
    concreteCleaning: 0,
    roofCleaning: 0,
    windowCleaning: 0,
  });

  const handleChange = (key: ServiceKey, value: number) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setValues({
      houseWashing: 0,
      concreteCleaning: 0,
      roofCleaning: 0,
      windowCleaning: 0,
    });
  };

  const activeServices = (Object.keys(PRICING_CONFIG) as ServiceKey[])
    .filter((key) => values[key] > 0)
    .map((key) => ({
      key,
      config: PRICING_CONFIG[key],
      value: values[key],
      estimate: calculateEstimate(values[key], PRICING_CONFIG[key]),
    }));

  const totalLow = activeServices.reduce((sum, s) => sum + s.estimate.low, 0);
  const totalHigh = activeServices.reduce(
    (sum, s) => sum + s.estimate.high,
    0
  );
  const hasActiveServices = activeServices.length > 0;

  return (
    <section id="cost-estimator" className="relative py-16 md:py-24">
      {/* Section Header — matches site style */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-10">
      <h2 className="font-sans font-bold text-4xl md:text-5xl text-deep-navy uppercase mb-4">
          Cost Estimator
        </h2>
        <p className="font-serif italic text-xl md:text-2xl text-[#5B8DB8]">
          Transparent pricing — no surprises, no hidden fees.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {(Object.keys(PRICING_CONFIG) as ServiceKey[]).map((key) => (
            <ServiceCard
              key={key}
              serviceKey={key}
              config={PRICING_CONFIG[key]}
              value={values[key]}
              onChange={(value) => handleChange(key, value)}
            />
          ))}
        </div>

        {/* Summary Panel */}
        <div className="bg-[#F5F4F2] border-2 border-[#FFD700] rounded-lg p-4 md:p-6 mb-4">
          <div className="flex justify-between items-center mb-4">
          <h3 className="text-[#001F3F] font-sans font-bold uppercase text-xl md:text-2xl tracking-wide">
              Your Estimate
            </h3>
            {hasActiveServices && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-[#001F3F] text-sm underline hover:opacity-70 transition-opacity"
              >
                <RotateCcw className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          {hasActiveServices ? (
            <>
              <div className="space-y-2 mb-4 pb-4 border-b border-[#E5E4E2]">
                {activeServices.map(({ key, config, value, estimate }) => (
                  <div
                    key={key}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-[#001F3F]">
                      {config.label}{" "}
                      <span className="text-[#6B7280]">
                        ({value.toLocaleString()} {config.unit})
                      </span>
                    </span>
                    <span className="text-[#001F3F] font-medium">
                      ${estimate.low.toLocaleString()} – $
                      {estimate.high.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
              <span className="text-[#001F3F] font-sans font-bold uppercase text-xl md:text-2xl tracking-wide">
                  Total Estimated Range
                </span>
                <span className="text-[#FFD700] font-bold text-2xl md:text-4xl">
                  ${totalLow.toLocaleString()} – ${totalHigh.toLocaleString()}
                </span>
              </div>
            </>
          ) : (
            <p className="text-[#6B7280] text-center py-4">
              Select services above to see your estimate
            </p>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-[#6B7280] text-xs text-center mt-4 px-2">
          Estimates are for informational purposes only. Final pricing requires
          an on-site assessment. Prices may vary based on access, condition, and
          travel distance.
        </p>
      </div>
    </section>
  );
}