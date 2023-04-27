import * as tf from '@tensorflow/tfjs';
import { OPTIMIZERS } from './optimizers';

export function generateData() {
  const input = [];
  const label = [];
  for (let i = 0; i < 1000; i++) {
    let value = Math.floor(Math.random() * 15);
    const min = value > 10 ? value / 15 - 0.05 : value / 15 - 0.15
    const max = value / 15 + 0.25 > 1 ? 1 : value / 15 + 0.15
    const randomLabel = Math.random() * (max - min) + min;
    input.push(value);
    label.push(randomLabel)
  }

  const tfInput = tf.tensor2d(input, [1000, 1]);
  const tfLabel = tf.tensor2d(label, [1000, 1]);

  return [tfInput, tfLabel];
}

const earlyStop = tf.callbacks.earlyStopping({
  monitor: 'loss',
  patience: 5
});

export function createModel(
  units=1,
  learningRate=0.01,
  optimizer="adam"
) {
  const selectOptimizer = (optimizer) => {
    return OPTIMIZERS[optimizer].fn(learningRate);
  };
  const model = tf.sequential();
  model.add(tf.layers.dense({units, inputShape: [1], activation: 'linear' }));
  model.compile({
    optimizer: selectOptimizer(optimizer),
    loss: "meanSquaredError",
    metrics: ['accuracy']
  })
  return model;
}

export async function trainModel(model, input, label, epochs = 50) {
  await model.fit(input, label, { epochs, validation_split: 0.2, callbacks: [earlyStop] });
}