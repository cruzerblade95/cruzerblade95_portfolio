import React, { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { Row, Tab, Tabs } from "react-bootstrap";

function Github() {
  const githubUsername = "cruzerblade95";
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(String(new Date().getFullYear()));
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    let active = true;

    const fetchYearContributions = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=${selectedYear}`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch contributions");
        }

        const data = await response.json();
        const yearContributions = Array.isArray(data?.contributions)
          ? data.contributions
          : [];

        if (active) {
          setContributions(yearContributions);
        }
      } catch (error) {
        if (active) {
          setContributions([]);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    const fetchAvailableYears = async () => {
      const years = [];
      for (let year = new Date().getFullYear(); year >= 2008; year -= 1) {
        try {
          const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=${year}`
          );

          if (!response.ok) {
            continue;
          }

          const data = await response.json();
          const yearContributions = Array.isArray(data?.contributions)
            ? data.contributions
            : [];

          if (yearContributions.some((day) => day.count > 0)) {
            years.push(String(year));
          }
        } catch (error) {
          continue;
        }
      }

      if (active) {
        setAvailableYears(years);
        if (!years.includes(selectedYear) && years.length > 0) {
          setSelectedYear(years[0]);
        }
      }
    };

    fetchYearContributions();
    fetchAvailableYears();

    return () => {
      active = false;
    };
  }, [githubUsername, selectedYear]);

  const totalCount = contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <Tabs
        id="github-year-tabs"
        activeKey={selectedYear}
        onSelect={(eventKey) => setSelectedYear(String(eventKey))}
        className="mb-3"
        style={{ justifyContent: "center" }}
      >
        {availableYears.map((year) => (
          <Tab eventKey={String(year)} title={String(year)} key={year} />
        ))}
      </Tabs>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        {loading ? (
          <div style={{ color: "#c084f5", marginTop: "12px" }}>Loading calendar...</div>
        ) : contributions.length > 0 ? (
          <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <ActivityCalendar
              data={contributions}
              blockSize={20}
              blockMargin={6}
              color="#c084f5"
              fontSize={16}
              labels={{
                totalCount: "{{count}} contributions in {{year}}",
              }}
            />
            <div
              style={{
                marginTop: "12px",
                textAlign: "center",
                color: "#c084f5",
                fontSize: "0.95rem",
              }}
            >
              {totalCount.toLocaleString()} contributions in {selectedYear}
            </div>
          </div>
        ) : (
          <div style={{ color: "#c084f5", marginTop: "12px" }}>
            No contribution data available for {selectedYear}.
          </div>
        )}
      </div>
    </Row>
  );
}

export default Github;
