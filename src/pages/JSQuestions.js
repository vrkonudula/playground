function JSQuestions() {
  function task1(str) {
    switch (str) {
      case "Good":
        alert("Your credit score is between 650 to 700");
        break;
      case "Bad":
        alert("Your credit score below 650");
        break;
      case "Excellent":
        alert("Your credit score is above 700");
        break;
      default:
        alert("Invalid Input");
    }
  }

  function task2(str) {
    str = str.toLowerCase();
    let ans = [];
    for (let i = 0; i < str.length; i++) {
      let index = ans.findIndex((obj) => obj.char === str.charAt(i));
      if (index === -1) {
        ans.push({ char: str.charAt(i), val: 1 });
      } else {
        ans[index].val++;
      }
    }
    let chars = ans.map((obj) => obj.char);
    let vals = ans.map((obj) => obj.val);
    let answer = chars.map((val, ind) => {
      return { [val]: vals[ind] };
    });
    let output = "";
    for (var property in answer) {
      output += JSON.stringify(answer[property]) + "\n";
    }
    alert(output);
  }

  function task3(sentence) {
    sentence = sentence.toLowerCase();
    const regex = /(b)[a-z]+/gm;
    let ans = sentence.match(regex)[0].length;
    alert(`Length of word : ${ans}`);
  }

  function task4(sentence) {
    sentence = sentence.toLowerCase();
    const regex = /([a-z])\1+/gm;
    let ans = sentence.match(regex).reduce((acc, val) => {
      return acc + val;
    });
    alert(ans);
  }

  function task5(sentence) {
    let ans = sentence.split(" ");
    for (let i = 0; i < ans.length; i++) {
      let word = ans[i];
      word = word[0].toUpperCase() + word.substring(1);
      ans[i] = word;
    }
    let answer = ans.reduce((acc, val) => {
      return acc + " " + val;
    });
    alert(answer);
  }

  return (
    <div>
      <h1>Hello!!</h1>
      <div>
        <h2>Task - 1</h2>
        <p>
          Enter "Good", "Bad" or "Excellent to see the output.(Case-sensitive)
        </p>

        <input type="text" id="task1Text" />
        <button
          onClick={() => {
            const val = document.getElementById("task1Text").value;
            task1(val);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <h2>Task - 2</h2>
        <p>Please enter any string</p>
        <input type="text" id="task2Text" />
        <button
          onClick={() => {
            const val = document.getElementById("task2Text").value;
            task2(val);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <h2>Task - 3</h2>
        <p>
          <strong>Input :</strong>{" "}
          <input
            type="text"
            placeholder="When boy went to boarding school, he was fine."
            id="task3Text"
            size="50"
          />{" "}
          Click this{" "}
          <button
            onClick={() => {
              let input = document.getElementById("task3Text").value;
              if (input) task3(input);
              else task3("When boy went to boarding school, he was fine");
            }}
          >
            button
          </button>{" "}
          to find the length of first word starting with 'b'.
        </p>
      </div>
      <div>
        <h2>Task - 4</h2>
        <p>
          <strong>Input : </strong>
          <input
            type="text"
            placeholder="Three girls went to forest .Monkey said yee yaaaaaw."
            id="task4Text"
            size="50"
          />{" "}
          Click this{" "}
          <button
            onClick={() => {
              task4("Three girls went to forest .Monkey said yee yaaaaaw");
            }}
          >
            button
          </button>{" "}
          to get the answer for this task.
        </p>
      </div>
      <div>
        <h2>Task - 5</h2>
        <p>
          <strong>Input : </strong>
          <input
            type="text"
            placeholder="I can code all night long."
            id="task5Text"
            size="50"
          />{" "}
          Click this{" "}
          <button
            onClick={() => {
              task5("I can code all night long");
            }}
          >
            button
          </button>{" "}
          to get the answer for this task.
        </p>
      </div>
    </div>
  );
}

export default JSQuestions;
