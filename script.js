document.addEventListener("DOMContentLoaded", () => {
  const roleSelect = document.getElementById("role");
  const resumeInput = document.getElementById("resume");
  const foundList = document.querySelector("#found-keywords ul");
  const missingList = document.querySelector("#missing-keywords ul");

  function populateRoles() {
    for (const role in jobKeywords) {
      const option = document.createElement("option");
      option.value = role;
      option.textContent = role;
      roleSelect.appendChild(option);
    }
  }

  function analyzeResume() {
    const selectedRole = roleSelect.value;
    const resumeText = resumeInput.value.toLowerCase().trim();

    foundList.innerHTML = "";
    missingList.innerHTML = "";

    if (!selectedRole || resumeText.length === 0) return;

    const keywords = jobKeywords[selectedRole];
    const foundKeywords = [];
    const missingKeywords = [];

    keywords.forEach((keyword) => {
      if (resumeText.includes(keyword.toLowerCase())) {
        foundKeywords.push(keyword);
      } else {
        missingKeywords.push(keyword);
      }
    });

    foundKeywords.forEach((kw) => {
      const li = document.createElement("li");
      li.textContent = kw;
      foundList.appendChild(li);
    });

    missingKeywords.forEach((kw) => {
      const li = document.createElement("li");
      li.textContent = kw;
      missingList.appendChild(li);
    });
  }

  populateRoles();

  roleSelect.addEventListener("change", analyzeResume);
  resumeInput.addEventListener("input", analyzeResume);
});
