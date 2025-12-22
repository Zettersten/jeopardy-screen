import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, type Category, type Question } from "@/data/jeopardyData";

interface SelectedQuestion {
  category: Category;
  question: Question;
  categoryIndex: number;
  questionIndex: number;
}

export const JeopardyBoard = () => {
  const [revealedTiles, setRevealedTiles] = useState<Set<string>>(new Set());
  const [selectedQuestion, setSelectedQuestion] = useState<SelectedQuestion | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const getTileKey = (catIdx: number, qIdx: number) => `${catIdx}-${qIdx}`;

  const handleTileClick = useCallback(
    (category: Category, question: Question, catIdx: number, qIdx: number) => {
      const key = getTileKey(catIdx, qIdx);
      if (revealedTiles.has(key)) return;

      setSelectedQuestion({ category, question, categoryIndex: catIdx, questionIndex: qIdx });
      setShowAnswer(false);
    },
    [revealedTiles]
  );

  const handleClose = useCallback(() => {
    if (selectedQuestion) {
      const key = getTileKey(selectedQuestion.categoryIndex, selectedQuestion.questionIndex);
      setRevealedTiles((prev) => new Set([...prev, key]));
    }
    setSelectedQuestion(null);
    setShowAnswer(false);
  }, [selectedQuestion]);

  const handleRevealAnswer = useCallback(() => {
    setShowAnswer(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background p-4 flex flex-col">
      {/* Board Grid */}
      <div
        className="grid flex-1 gap-2"
        style={{
          gridTemplateColumns: `repeat(${categories.length}, 1fr)`,
          gridTemplateRows: "auto repeat(8, 1fr)",
        }}
      >
        {/* Category Headers */}
        {categories.map((category, catIdx) => (
          <div
            key={`header-${catIdx}`}
            className="jeopardy-tile jeopardy-border flex items-center justify-center p-2 min-h-[80px]"
          >
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-primary text-center jeopardy-text-glow uppercase tracking-wide leading-tight">
              {category.name}
            </h2>
          </div>
        ))}

        {/* Question Tiles */}
        {Array.from({ length: 8 }).map((_, qIdx) =>
          categories.map((category, catIdx) => {
            const question = category.questions[qIdx];
            const key = getTileKey(catIdx, qIdx);
            const isRevealed = revealedTiles.has(key);

            return (
              <motion.button
                key={key}
                onClick={() => handleTileClick(category, question, catIdx, qIdx)}
                disabled={isRevealed}
                className={`jeopardy-tile jeopardy-border flex items-center justify-center cursor-pointer transition-all duration-200 ${
                  isRevealed
                    ? "opacity-20 cursor-not-allowed"
                    : "hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
                }`}
                whileHover={!isRevealed ? { scale: 1.02 } : undefined}
                whileTap={!isRevealed ? { scale: 0.98 } : undefined}
              >
                <span className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary jeopardy-text-glow">
                  ${question.points}
                </span>
              </motion.button>
            );
          })
        )}
      </div>

      {/* Fullscreen Question Modal */}
      <AnimatePresence>
        {selectedQuestion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={handleClose}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95"
            />

            {/* Question Card */}
            <motion.div
              initial={{ scale: 0.5, rotateY: -180, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotateY: 180, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 0.6,
              }}
              className="relative z-10 jeopardy-tile jeopardy-border w-[90vw] h-[80vh] max-w-6xl flex flex-col items-center justify-center p-8 md:p-16"
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: 1000 }}
            >
              {/* Category Badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-8 left-8 right-8"
              >
                <span className="font-display text-xl md:text-2xl text-muted-foreground uppercase tracking-widest">
                  {selectedQuestion.category.name}
                </span>
                <span className="font-display text-2xl md:text-3xl text-primary jeopardy-text-glow ml-4">
                  ${selectedQuestion.question.points}
                </span>
              </motion.div>

              {/* Question/Answer Content */}
              <AnimatePresence mode="wait">
                {!showAnswer ? (
                  <motion.div
                    key="question"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.4 }}
                    className="text-center flex-1 flex items-center"
                  >
                    <p className="font-body text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary jeopardy-text-glow leading-tight uppercase">
                      {selectedQuestion.question.question}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="text-center flex-1 flex items-center"
                  >
                    <p className="font-body text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-accent jeopardy-text-glow leading-tight uppercase">
                      {selectedQuestion.question.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 flex gap-4"
              >
                {!showAnswer ? (
                  <button
                    onClick={handleRevealAnswer}
                    className="font-display text-xl md:text-2xl px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-accent transition-colors uppercase tracking-wider"
                  >
                    Reveal Answer
                  </button>
                ) : (
                  <button
                    onClick={handleClose}
                    className="font-display text-xl md:text-2xl px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-accent transition-colors uppercase tracking-wider"
                  >
                    Close
                  </button>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
