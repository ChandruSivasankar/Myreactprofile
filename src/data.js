import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Education",
    description: "Bachelor of Computer Science and Engineering",
  },
  {
    image: jsxImg,
    title: "Career",
    description: "ex-Accenture | ex-Cognizant",
  },
  {
    image: propsImg,
    title: "Skills",
    description:
      "Technology lead,Solution Architect - Cloud, Web and Mobile Fullstack development",
  },
  /*{
     image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  }, */
];

export const EXAMPLES = {
  Books: {
    title: "Books",
    description: "Favorite books TBD:call google books api",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  Projects: {
    title: "Projects",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  Credentials: {
    title: "Credentials",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
