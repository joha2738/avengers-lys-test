
/**
 * Brug denne fil for at definere brugerdefinerede funktioner og blokke.
 * Læs mere på https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Brugerdefinerede blokke
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: beskriv din funktion her
     * @param n beskriv parameteret her, eg: 5
     * @param s beskriv parameteret her, eg: "Hello"
     * @param e beskriv parameteret her
     */
    //% block="Første $f Sidste $s Rød $r Grøn $g Blå $b Pause $t"
    export function foo(f: number, s: number, r: number, g:  number, b: number, t: number): void {
        for (let Ciirkel = f; Ciirkel <= s; Ciirkel++) {
        strip.setPixelColor(Ciirkel, neopixel.rgb(r, g, b))
        strip.show()
        basic.pause(t)
        }
    }

    /**
     * TODO: beskriv din funktion her
     * @param value beskriv værdien her, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
