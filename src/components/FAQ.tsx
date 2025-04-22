import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Is there a limit to how many requests I can have?",
      answer: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      question: "How fast will I receive my designs?",
      answer: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      question: "How does the pause feature work?",
      answer: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      question: "How do I request designs?",
      answer: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      question: "What if I don't like the design?",
      answer: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      question: "Is there any design work you don't cover?",
      answer: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      question: "What if I only have a single request?",
      answer: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      question: "Are there any refunds if I don't like the service?",
      answer: "Lorem ipsum dolor sit amet consectetur...",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <span style={styles.titlePart1}>Frequently Ask</span>
          <span style={styles.titlePart2}>Questions</span>
        </h1>
      </div>

      <div style={styles.faqContainer}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            style={styles.faqItem}
            onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
          >
            <div style={styles.questionHeader}>
              <h3 style={styles.questionText}>{item.question}</h3>
              <div style={styles.toggleButton}>
                <ChevronDown
                  size={24}
                  color={colors.textDark}
                  style={{
                    transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>
            </div>

            {expandedIndex === index && (
              <div style={styles.answerContent}>
                <p style={styles.answerText}>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Style constants
const colors = {
  primary: '#FF9416',
  secondary: '#B2B6C9',
  textDark: '#616161',
  background: '#FFFFFF',
  border: '#B2B6C9',
};

const typography = {
  title: {
    fontSize: '50px',
    lineHeight: '70px',
  },
  question: {
    fontSize: '23px',
    fontWeight: '600',
  },
  answer: {
    fontSize: '19px',
    lineHeight: '35px',
  },
};

const spacing = {
  containerPadding: '52px 193px',
  itemPadding: '31px 39px',
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: '720px',
    maxWidth: '90%',
    margin: '0 auto',
    padding: spacing.containerPadding,
    background: colors.background,
    borderRadius: '18px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '54px',
  },
  title: {
    ...typography.title,
    fontFamily: "'San Francisco Text', sans-serif",
    fontWeight: '700',
    textTransform: 'capitalize',  // Menyesuaikan dengan tipe yang diterima
  },
  titlePart1: {
    color: colors.secondary,
  },
  titlePart2: {
    color: colors.primary,
    fontFamily: "'Behind The Nineties', sans-serif",
    fontStyle: 'italic',
    fontWeight: '400',
    marginLeft: '8px',
  },
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '31px',
  },
  faqItem: {
    border: `2px solid ${colors.border}`,
    borderRadius: '8px',
    padding: spacing.itemPadding,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  questionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    ...typography.question,
    color: colors.textDark,
    fontFamily: "'San Francisco Display', sans-serif",
    margin: '0',
    flex: 1,
  },
  toggleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerContent: {
    marginTop: '20px',
  },
  answerText: {
    ...typography.answer,
    color: colors.textDark,
    fontFamily: "'San Francisco Text', sans-serif",
    fontWeight: '300',
    margin: '0',
  },
};

export default FAQSection;
