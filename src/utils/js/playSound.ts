import click from '../../sound/click.mp3';
import whist from '../../sound/whist.mp3';
import dindin from '../../sound/dindin.mp3';
import birds from '../../sound/birds.mp3';

type TSounds = {
  [n: number]: [number, string, string];
}

export const sounds: TSounds = [
  [0, 'Нет', ''],
  [1, 'Щёлк', click],
  [2, 'Свист', whist],
  [3, 'Динь', dindin],
  [4, 'Щебет', birds],
];

export const playSound = (sound: number): void => {
  if (sound && sounds[sound] && sounds[sound][1]) {
    (new Audio(sounds[sound][2])).play();
  }
};
