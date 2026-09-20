import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { INVESTMENTS } from '../data/portfolioData';

export const OrbitChart: React.FC = () => {
  const chartData = INVESTMENTS.map((inv) => ({
    name: inv.ticker,
    fullName: inv.name,
    value: inv.allocationPercent,
    color: inv.color,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-xl text-xs space-y-1">
          <p className="font-bold text-cyan-400">{data.name}</p>
          <p className="text-slate-300">{data.fullName}</p>
          <p className="font-mono text-emerald-400 font-extrabold">{data.value}% Allocation</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative w-full h-[320px] flex items-center justify-center">
      {/* Slow spinning orbit ring behind the chart */}
      <div className="absolute w-[270px] h-[270px] rounded-full border border-dashed border-cyan-500/20 animate-[spin_40s_linear_infinite] pointer-events-none" />
      <div className="absolute w-[220px] h-[220px] rounded-full border border-cyan-500/10 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />

      {/* Pulsing center node */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">Sharia</span>
        <span className="text-lg font-extrabold text-slate-100">100% Halal</span>
        <span className="text-[10px] text-slate-400">Equity & REITs</span>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={75}
            outerRadius={105}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
