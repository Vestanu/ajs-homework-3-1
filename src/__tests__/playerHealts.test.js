import { playerHealth } from "../main.js"


test("Говорит, что здоров при здоровье больше 50", () => {
    const result = playerHealth(51)
    expect(result).toBe("healthy");
})

test("Говорит, что ранен при здоровье равном 50", () => {
    const result = playerHealth(50)
    expect(result).toBe("woundred");
})

test("Говорит, что ранен при здоровье 45", () => {
    const result = playerHealth(45)
    expect(result).toBe("woundred");
})

test("Говорит, что ранен при здоровье 15", () => {
    const result = playerHealth(15)
    expect(result).toBe("woundred");
})

test("Говорит, что состоение критическое при здоровье 10", () => {
    const result = playerHealth(10)
    expect(result).toBe("critical");
})

test("Говорит, что убит при здоровье 0", () => {
    const result = playerHealth(0)
    expect(result).toBe("critical");
})

test("Говорит, что ранен при здоровье меньше 0", () => {
    const result = playerHealth(-10)
    expect(result).toBe("critical");
})
