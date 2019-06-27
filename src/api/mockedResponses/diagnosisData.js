// reject symptoms that have initial: true, choice_id !== "absent"

export default [
  {
    date: 1561492575569,
    symptoms: [
      { id: "s_13", common_name: "Abdominal pain" },
      { id: "s_418", common_name: "Stiff neck" },
      { id: "s_1782" },
      { id: "s_1802", common_name: "Burning or gnawing belly pain" },
    ],
    conditions: [
      {
        categories: ["Infectiology"],
        common_name: "Common cold",
        id: "c_87",
        probability: 0.7942,
      },
      {
        categories: ["Gastroenterology"],
        id: "c_10",
        common_name: "Gastroenteritis",
        probability: 0.2801,
      },
      {
        categories: ["Gastroenterology"],
        id: "c_138",
        common_name: "Food poisoning",
        probability: 0.1801,
      },
      {
        categories: ["Gastroenterology"],
        id: "c_969",
        common_name: "Abdominal pain, unspecified",
        probability: 0.0801,
      },
    ],
  },
  {
    date: 1561499667349,
    symptoms: [
      { id: "s_13", common_name: "Abdominal pain" },
      { id: "s_1802", common_name: "Burning or gnawing belly pain" },
    ],
    conditions: [
      {
        categories: ["Gastroenterology"],
        id: "c_10",
        common_name: "Gastroenteritis",
        probability: 0.6801,
      },
      {
        categories: ["Gastroenterology"],
        id: "c_138",
        common_name: "Food poisoning",
        probability: 0.0801,
      },
      {
        categories: ["Gastroenterology"],
        id: "c_969",
        common_name: "Abdominal pain, unspecified",
        probability: 0.0501,
      },
    ],
  },
];