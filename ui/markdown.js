
function renderDropdownMarkdown(branchname,filteredData){

      var setsDropDown = document.getElementById("feature-sets-dropdown");
        setsDropDown.innerHTML = "";
        filteredData?.forEach(function (item) {
          if( item === "log-verification.md") return 
          var option = document.createElement("option");
          const fileName = item?.split('.md')[0];
          option.text = fileName;
          setsDropDown.add(option);
        });
        renderMarkdown(branchname,filteredData[0]?.split('.md')[0]);
  }

function renderMarkdown(branchName,file) {
  fetch(
    `https://raw.githubusercontent.com/ONDC-Official/ONDC-Registry-Specifications/${branchName}/api/components/docs/${file}.md`
  )
    .then((response) => response.text())
    .then(async (text) => {
      const result =  await extractTextBetweenBackticks(text)
      //if mermaid diagram exist
      // if(result?.length){
      //   for (const [index, item] of result.entries()) {
      //     console.log("item> ", item)
      //     const mermaidDiagram = await mermaid.render(`marimaid-summary-${index}`, item)
      //     const mermaidPattern = /```mermaid[\s\S]*?```/;
      //     console.log("meramidD", mermaidDiagram?.svg)
      //     text = text.replace(mermaidPattern, mermaidDiagram?.svg.replace(/\"/g, '"'))
      //   }
      // }

      const textWithBranchName = text.replace(/branchName/g, branchName);
      let textData = marked.parse(textWithBranchName);

      if(result?.length){
        for (const [index, item] of result.entries()) {
          const mermaidDiagram = await mermaid.render(`marimaid-summary-${index}`, item)
          const mermaidPattern = /<code class="language-mermaid">[\s\S]*?code>/;
          textData = textData.replace(mermaidPattern, mermaidDiagram?.svg.replace(/\"/g, '"'))
        }
      }

      document.getElementById("markdown-container").innerHTML = textData 

    });
}

function updateFeature() {
  var example_set = document.getElementById("feature-sets-dropdown");
  const selectedOption = document.getElementById("contract-dropdown")?.value;
  renderMarkdown(selectedOption,example_set.value);
}

function extractTextBetweenBackticks(inputString) {
  const mermaidRegex = /```mermaid([\s\S]*?)```/g;
  let matches;
  const diagrams = [];

  while ((matches = mermaidRegex.exec(inputString)) !== null) {
    diagrams.push(matches[1].trim());
  }

  return diagrams;
}