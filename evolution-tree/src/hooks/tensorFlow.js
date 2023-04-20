import * as tf from '@tensorflow/tfjs';
import { OPTIMIZERS } from './optimizers';

export function generateData() {
  const input = [];
  const label = [];
  for (let i = 0; i < 10000; i++) {
    let value = Math.floor(Math.random() * 15);
    input.push(value);
    label.push(parseFloat(value) / 15)
  }

  const tfInput = tf.tensor(input, [10000, 1]);
  const tfLabel = tf.tensor(label, [10000, 1]);

  return [tfInput, tfLabel];
}

export function createModel(
  units=1,
  learningRate=0.01,
  optimizer="momentum"
) {
  const selectOptimizer = (optimizer) => {
    return OPTIMIZERS[optimizer].fn(learningRate);
  };
  const model = tf.sequential();
  model.add(tf.layers.dense({units, inputShape: [1] }));
  model.compile({
    optimizer: selectOptimizer(optimizer),
    loss: "meanAbsoluteError"
  })
  return model;
}

export async function trainModel(model, input, label, epochs = 500) {
  await model.fit(input, label, { epochs });
}