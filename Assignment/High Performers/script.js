function highPerformers(students) {
    const highScorers = students.filter(student => {
        const averageScore = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
        return averageScore > 90;
    });
    const result = highScorers.map(student => ({
        name: student.name,
        average: student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length
    }));

    return result;




}