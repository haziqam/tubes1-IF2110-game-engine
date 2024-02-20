import { useEffect, useState } from 'react';
import { useBoard } from '../hooks/useBoard';
import { Board } from './Board';
import { BotScoreData } from './ScoreTable';
import { SideMenu } from './SideMenu';

export const Home = () => {
  const [boardId, setBoardId] = useState(1);
  const { board, bots } = useBoard(boardId, 250);
  const [finalScores, setFinalScores] = useState({});
  const [started, setStarted] = useState(false);

  const onBoardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBoardId(parseInt(event.target.value));
  };

  useEffect(() => {
    if (started) {
      if (bots.length == 0) {
        console.log(finalScores);
        setStarted(false);
      }
    } else {
      if (bots.length > 0) {
        setStarted(true);
        setFinalScores({});
      }
    }
  }, [bots]);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 w-screen min-h-[70vh] flex flex-col my-5">
      <div className="flex-1 grid grid-cols lg:grid-cols-[1fr_30%] mx-4 gap-4 lg:mx-14 lg:p-0">
        <Board board={board} />
        <SideMenu
          bots={bots}
          boardId={boardId}
          onBoardChange={onBoardChange}
          botScores={getBotScoreData(finalScores)}
        />
      </div>
    </div>
  );
};

function getBotScoreData(finalScores: {
  [key: string]: number;
}): BotScoreData[] {
  const botScoreData: BotScoreData[] = [];
  for (const key in finalScores) {
    botScoreData.push({ name: key, score: finalScores[key] });
  }
  return botScoreData;
}
