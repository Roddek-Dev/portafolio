import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    category: "AI / Orquestación",
    items: [
      "Prompt Engineering",
      "MCP (Model Context Protocol)",
      "Engrams",
      "SSD",
      "OpenCode Orchestration",
    ],
  },
  {
    category: "Datos",
    items: [
      "Power BI",
      "Excel Avanzado",
      "SQL Modeling",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    category: "Desarrollo",
    items: ["Python", "Java Spring Boot", "PHP Laravel", "Linux", "n8n"],
  },
  {
    category: "Blandas",
    items: [
      "Comunicación Técnica",
      "Soporte al Cliente",
      "Levantamiento de Requerimientos",
      "SCRUM",
    ],
  },
];
