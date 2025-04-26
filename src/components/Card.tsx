export function Card() {
  return (
    <div className="card bg-primary text-primary-content justify-center items-center flex h-7/10 w-9/10">
      <div className="card-body">
        <h1 className="card-title text-3xl sm:text-4xl justify-center items-center mb-5">
          Age Calculator
        </h1>

        <form>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="flex justify-center items-center text-lg">DAY</h2>
              <input type="number" className="input w-full bg-transparent" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="flex justify-center items-center text-lg">
                MONTH
              </h2>
              <input type="number" className="input w-full bg-transparent" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="flex justify-center items-center text-lg">YEAR</h2>
              <input type="number" className="input w-full bg-transparent" />
            </div>
          </div>

          <div className="relative flex justify-center items-center mt-10">
            {/* Line */}
            <div className="absolute w-full h-px bg-gray-300"></div>

            {/* Button */}
            <button className="btn w-15 h-15 rounded-full bg-primary z-10"></button>
          </div>
        </form>
      </div>
    </div>
  );
}
