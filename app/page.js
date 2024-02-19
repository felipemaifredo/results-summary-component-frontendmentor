import "./page.style.css";
import reacIcon from "@/results-summary-component-main/images/icon-reaction.svg"
import memoIcon from "@/results-summary-component-main/images/icon-memory.svg"
import verbIcon from "@/results-summary-component-main/images/icon-verbal.svg"
import visuIcon from "@/results-summary-component-main/images/icon-visual.svg"
import Image from "next/image"

const summaryData = [
  { title: "Reaction", icon: reacIcon, note: "80", color: "red" },
  { title: "Memory", icon: memoIcon, note: "92", color: "yellow" },
  { title: "Verbal", icon: verbIcon, note: "61", color: "green" },
  { title: "Visual", icon: visuIcon, note: "72", color: "blue" },
]

export default function Home() {

  const RenderSummary = (props) => {
    const { title, icon, note, color } = props

    return (
      <div className={`summary-item ${color}`}>
        <div className="first-item-summary">
          <Image 
            src={icon}
          />
          <p className="summary-title">{title}</p>
        </div>
        <div className="summary-note-box">
          <p className="summary-note">{note}</p>
          <p className="summary-max-note">/ 100</p>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className="container">
        <div className="left-side-container">
          <p>Your Result</p>
          <div className="result-box">
            <p className="result">76</p>
            <p className="max">of 100</p>
          </div>
          <p className="title-result">Great</p>
          <p className="description-result">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="right-side-container">
          <p>Summary</p>
          <div className="summary-container">
            {summaryData.map((smItem) => (
              <RenderSummary 
                title={smItem.title}
                note={smItem.note}
                icon={smItem.icon}
                color={smItem.color}
              />
            ))}
          </div>
          <div className="btn-box">
            <button>
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
