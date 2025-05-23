import { useState, FormEvent, ChangeEvent } from "react";
import { ArrowDown } from "lucide-react";
import { DateTime } from "luxon";

type CardProps = {
  error: string;
  setError: (error: string) => void;
};

export function Card({ error, setError }: CardProps) {
  const [day, setDay] = useState<number | "">("");
  const [month, setMonth] = useState<number | "">("");
  const [year, setYear] = useState<number | "">("");
  const [ageYears, setAgeYears] = useState<number | null>(null);
  const [ageMonths, setAgeMonths] = useState<number | null>(null);
  const [ageDays, setAgeDays] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (day === "" || month === "" || year === "") {
      setError("Please fill in all fields.");
      return;
    }

    const birthDate = DateTime.fromObject({
      day,
      month,
      year,
    });

    const now = DateTime.now();

    if (!birthDate.isValid || birthDate > now) {
      setError("Invalid date. Please enter a correct date.");
      return;
    }

    const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

    setAgeYears(Math.floor(diff.years ?? 0));
    setAgeMonths(Math.floor(diff.months ?? 0));
    setAgeDays(Math.floor(diff.days ?? 0));
    setError("");
  };

  const handleDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value === "" ? "" : parseInt(e.target.value));
  };

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value === "" ? "" : parseInt(e.target.value));
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value === "" ? "" : parseInt(e.target.value));
  };

  return (
    <div className="card bg-primary text-primary-content justify-center items-center flex h-auto w-9/10 sm:w-xl lg:w-3xl">
      <div className="card-body">
        <h1 className="card-title text-4xl sm:text-6xl justify-center items-center mb-5 font-extrabold">
          Age Calculator
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-5 font-semibold text-primary-content/50 text-xl sm:text-2xl">
            <div className="flex flex-col gap-2">
              <h2 className="flex justify-center items-center">DAY</h2>
              <input
                type="number"
                className="input w-full bg-transparent text-lg border-primary-content"
                value={day}
                onChange={handleDayChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="flex justify-center items-center">MONTH</h2>
              <input
                type="number"
                className="input w-full bg-transparent text-lg border-primary-content"
                value={month}
                onChange={handleMonthChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="flex justify-center items-center">YEAR</h2>
              <input
                type="number"
                className="input w-full bg-transparent text-lg border-primary-content"
                value={year}
                onChange={handleYearChange}
                required
              />
            </div>
          </div>

          <div className="relative flex justify-center items-center mt-5">
            {/* Line */}
            <div className="absolute w-full h-px bg-primary-content"></div>

            {/* Button */}
            <button className="btn w-[60px] h-[60px] border-primary-content rounded-full bg-primary z-10 flex justify-center items-center">
              <ArrowDown className="scale-125 text-primary-content" />
            </button>
          </div>
        </form>

        <div className="mt-5 mb-5 h-full flex flex-col justify-start items-start text-center">
          <div className="text-left flex flex-col gap-5">
            <p className="text-5xl font-bold flex flex-row gap-3">
              {ageYears !== null && error == "" ? ageYears : "--"}{" "}
              <span className="text-primary-content/50 text-4xl flex justify-start items-center">
                years
              </span>
            </p>
            <p className="text-5xl font-bold flex flex-row gap-3">
              {ageMonths !== null && error == "" ? ageMonths : "--"}{" "}
              <span className="text-primary-content/50 text-4xl flex justify-start items-center">
                months
              </span>
            </p>
            <p className="text-5xl font-bold flex flex-row gap-3">
              {ageDays !== null && error == "" ? ageDays : "--"}{" "}
              <span className="text-primary-content/50 text-4xl flex justify-start items-center">
                days
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
