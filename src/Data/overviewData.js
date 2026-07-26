import {
  Shield,
  Globe2,
  Zap,
  Lock,
  Mail,
  BrainCircuit,
} from "lucide-react";

const overviewData = [
  {
    id: 1,
    icon: Shield,
    title: "AI Threat Detection",
    description:
      "Advanced AI models instantly analyse websites, emails, QR codes and files to identify phishing attacks before they reach the user.",
    accent: "#00F5FF",
    size: "large",
    position: {
      desktop: {
        top: "6%",
        left: "6%",
      },
      mobile: {},
    },
    delay: 0.1,
  },
  {
    id: 2,
    icon: Globe2,
    title: "Global Phish Ledger",
    description:
      "Every verified phishing signature is stored in a decentralised blockchain ledger, making future attacks easier to detect globally.",
    accent: "#5B8CFF",
    size: "medium",
    position: {
      desktop: {
        top: "18%",
        right: "8%",
      },
      mobile: {},
    },
    delay: 0.3,
  },
  {
    id: 3,
    icon: Zap,
    title: "Real-Time Analysis",
    description:
      "Scan suspicious links within milliseconds and receive detailed AI explanations along with confidence scores.",
    accent: "#00FFD1",
    size: "small",
    position: {
      desktop: {
        top: "42%",
        left: "12%",
      },
      mobile: {},
    },
    delay: 0.5,
  },
  {
    id: 4,
    icon: Lock,
    title: "Privacy First",
    description:
      "User data remains secure throughout the scanning process. Sensitive information is processed with privacy at the core.",
    accent: "#7C5CFF",
    size: "medium",
    position: {
      desktop: {
        top: "54%",
        right: "15%",
      },
      mobile: {},
    },
    delay: 0.7,
  },
  {
    id: 5,
    icon: Mail,
    title: "Multi-Platform Protection",
    description:
      "Protect emails, websites, attachments, QR codes and downloadable files through a single intelligent security platform.",
    accent: "#00E0FF",
    size: "large",
    position: {
      desktop: {
        bottom: "10%",
        left: "28%",
      },
      mobile: {},
    },
    delay: 0.9,
  },
  {
    id: 6,
    icon: BrainCircuit,
    title: "Explainable AI",
    description:
      "Understand every prediction with transparent AI reasoning, risk scores and highlighted phishing indicators.",
    accent: "#46D9FF",
    size: "medium",
    position: {
      desktop: {
        bottom: "12%",
        right: "10%",
      },
      mobile: {},
    },
    delay: 1.1,
  },
];

export default overviewData;