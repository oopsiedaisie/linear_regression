
function setup() {
	createCanvas(400, 400);
	const values = [];

	for (let i = 0; i < 30; i++) {
		values[i] = random(1, 100);
	}

	const shape = [2, 5, 3];
	const data = tf.tensor3d(values, shape, "int32");

	// m rows by n columns
	//turn list of 6 numbers into two 3 by 1 tensors
	const data2 = tf.tensor([1.0, 2, 3, 4, 5, 6], [2, 3, 1], "int32");
	//'int32' floors floating point numbers
	//	data.print();
	console.log(data.toString());
	data2.print();
}
