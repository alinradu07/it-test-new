import ModalImage from "react-modal-image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function QuestionImageModal({ question }) {
  console.log(question)
  let type = question.material.substring(1, 4);
  let url = question.material.substring(5);
  console.log(type, url)

  let material = <div></div>;
  if (type === "img") {
    material = (
      <ModalImage
        imageBackgroundColor="white"
        small={url + ".svg"}
        large={url + ".png"}
        alt="test-image"
      />
    );
  } else if (type === "cod") {
    material = (
      <pre className="language-html">
        <SyntaxHighlighter language="python" showLineNumbers style={docco}>
          {url}
        </SyntaxHighlighter>
      </pre>
    );
  } else if (question.material === "") {
    material = <div />;
  } else {
    alert("Error rendering materials");
    material = <img alt="test-image" src={url} />;
  }

  return <>{material}</>;
}

export default QuestionImageModal;
