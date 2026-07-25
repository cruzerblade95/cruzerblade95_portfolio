import React, {
  useEffect,
  useState,
} from "react";
import ActivityCalendar from "react-activity-calendar";
import { BsGithub } from "react-icons/bs";
import Reveal from "../Reveal";

const currentYear = new Date().getFullYear();

const years = Array.from(
  { length: 6 },
  (_, index) => String(currentYear - index)
);

function Github() {
  const githubUsername = "cruzerblade95";

  const [contributions, setContributions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedYear, setSelectedYear] =
    useState(String(currentYear));

  useEffect(() => {
    let active = true;

    async function fetchContributions() {
      setLoading(true);

      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=${selectedYear}`
        );

        if (!response.ok) {
          throw new Error(
            "Unable to fetch contributions"
          );
        }

        const data = await response.json();

        if (active) {
          setContributions(
            Array.isArray(data?.contributions)
              ? data.contributions
              : []
          );
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
    }

    fetchContributions();

    return () => {
      active = false;
    };
  }, [selectedYear]);

  const totalCount = contributions.reduce(
    (total, day) => total + day.count,
    0
  );

  return (
    <Reveal className="github-panel">
      <div className="github-panel-heading">
        <div>
          <span className="eyebrow">
            Open-source activity
          </span>

          <h2>
            <BsGithub />
            GitHub contributions
          </h2>
        </div>

        <div
          className="github-year-selector"
          aria-label="Contribution year"
        >
          {years.map((year) => (
            <button
              className={
                selectedYear === year
                  ? "active"
                  : ""
              }
              key={year}
              onClick={() => {
                setSelectedYear(year);
              }}
              type="button"
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="github-calendar-wrap">
        {loading ? (
          <div className="calendar-loading">
            <span />
            Loading contribution activity
          </div>
        ) : contributions.length > 0 ? (
          <>
            <ActivityCalendar
              data={contributions}
              blockSize={14}
              blockMargin={5}
              fontSize={13}
              colorScheme="dark"
              theme={{
                dark: [
                  "#151821",
                  "#243251",
                  "#3568c0",
                  "#6a9cff",
                  "#c3d8ff",
                ],
              }}
              labels={{
                totalCount:
                  "{{count}} contributions in {{year}}",
              }}
            />

            <p className="contribution-total">
              <strong>
                {totalCount.toLocaleString()}
              </strong>{" "}
              contributions in {selectedYear}
            </p>
          </>
        ) : (
          <p className="calendar-empty">
            Contribution data is currently
            unavailable for {selectedYear}.
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default Github;