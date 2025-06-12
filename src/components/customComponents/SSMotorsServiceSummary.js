const SSMotorsServiceSummary = ({ summarydata }) => {
  return (
    <div className="flex justify-center">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title font-bold">Total Services</div>
          <div className="stat-value text-primary">
            🪛 {summarydata?.servicesCount}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Vehicles served</div>
          <div className="stat-value text-secondary">
            🚲 {summarydata?.vehiclesServed}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Total earnings</div>
          <div className="stat-value text-secondary">
            <span className="text-green-600 italic">
              ₹‎ {summarydata?.overallearnings}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSMotorsServiceSummary;
