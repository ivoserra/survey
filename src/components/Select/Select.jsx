import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { Circle, Check, Square } from "phosphor-react";

import NextButton from "../Buttons/NextButton";
import BackButton from "../Buttons/BackButton";

import "./Select.scss";

export default function Select(props) {
  const { options, path } = props;
  const { score, setScore , setUser} = useContext(UserContext);

  const [isOften, setIsOften] = useState(false);
  const [isRarely, setIsRarely] = useState(false);
  const [isNever, setIsNever] = useState(false);

  const [isOptionOne, setIsOptionOne] = useState(false);
  const [isOptionTwo, setIsOptionTwo] = useState(false);
  const [isOptionThree, setIsOptionThree] = useState(false);

  if (path === "question0") {
    return (
      <>
        <section className="Select-section">
          <input
            onChange={(e) => setUser(e.target.value)}
            placeholder="John Doe"
          ></input>
        </section>

        <NextButton nextPage="question1" />
        <BackButton welcome="welcome" />
      </>
    );
  }

  if (path === "question1") {
    function selectCircle(option) {
      switch (option.name) {
        case "Often":
          setIsOften(true);
          setIsRarely(false);
          setIsNever(false);
          setScore({ ...score, first: option.value });
          break;

        case "Rarely":
          setIsRarely(true);
          setIsOften(false);
          setIsNever(false);
          setScore({ ...score, first: option.value });
          break;

        case "Never":
          setIsNever(true);
          setIsOften(false);
          setIsRarely(false);
          setScore({ ...score, first: option.value });
          break;
        default:
      }
    }

    return (
      <>
        <section className="Select-section question1">
          {options.map((option) => {
            if (option.name === "Often") {
              return (
                <button key={option.name} onClick={(e) => selectCircle(option)}>
                  {isOften ? (
                    <Check className="iconActive" />
                  ) : (
                    <Circle className="icon" />
                  )}
                  <p>{option.name}</p>
                </button>
              );
            }
            if (option.name === "Rarely") {
              return (
                <button key={option.name} onClick={(e) => selectCircle(option)}>
                  {isRarely ? (
                    <Check className="iconActive" />
                  ) : (
                    <Circle className="icon" />
                  )}
                  <p>{option.name}</p>
                </button>
              );
            }
            if (option.name === "Never") {
              return (
                <button key={option.name} onClick={(e) => selectCircle(option)}>
                  {isNever ? (
                    <Check className="iconActive" />
                  ) : (
                    <Circle className="icon" />
                  )}
                  <p>{option.name}</p>
                </button>
              );
            }
            return null;
          })}
        </section>

        <NextButton nextPage="question2" />
        <BackButton backPage="question0" />
      </>
    );
  }

  if (path === "question2") {
    function selectOption(option) {
      const key = option.name.toLowerCase().split(" ").join("");

      if (option.name === "Option 1") {
        if (!isOptionOne) {
          setIsOptionOne(true);
          setScore({ ...score, [key]: option.value });
        } else {
          setIsOptionOne(false);
          setScore({ ...score, [key]: "0" });
        }
      }

      if (option.name === "Option 2") {
        if (!isOptionTwo) {
          setIsOptionTwo(true);
          setScore({ ...score, [key]: option.value });
        } else {
          setIsOptionTwo(false);
          setScore({ ...score, [key]: "0" });
        }
      }

      if (option.name === "Option 3") {
        if (!isOptionThree) {
          setIsOptionThree(true);
          setScore({ ...score, [key]: option.value });
        } else {
          setIsOptionThree(false);
          setScore({ ...score, [key]: "0" });
        }
      }
    }

    return (
      <>
        <section className="Select-section question2">
          {options.map((option) => {
            if (option.name === "Option 1") {
              return (
                <button key={option.name} onClick={(e) => selectOption(option)}>
                  {isOptionOne ? (
                    <Check className="iconSquareActive" />
                  ) : (
                    <Square className="icon" />
                  )}
                  <p>{option.name}</p>
                </button>
              );
            }
            if (option.name === "Option 2") {
              return (
                <button key={option.name} onClick={(e) => selectOption(option)}>
                  {isOptionTwo ? (
                    <Check className="iconSquareActive" />
                  ) : (
                    <Square className="icon" />
                  )}
                  <p>{option.name}</p>
                </button>
              );
            }
            if (option.name === "Option 3") {
              return (
                <button key={option.name} onClick={(e) => selectOption(option)}>
                  {isOptionThree ? (
                    <Check className="iconSquareActive" />
                  ) : (
                    <Square className="icon" />
                  )}
                  <p>{option.name}</p>
                </button>
              );
            }
            return null;
          })}
        </section>

        <NextButton nextPage="question3" />
        <BackButton backPage="question1" />
      </>
    );
  }

  if (path === "question3") {
    return (
      <>
        <section className="Select-section question3">
          <select
            onChange={(e) => setScore({ ...score, last: e.target.value })}
          >
            {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </section>

        <NextButton finish="finish" />
        <BackButton backPage="question2" />
      </>
    );
  }
}
