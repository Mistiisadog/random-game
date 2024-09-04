enum ActionKind {
    Walking,
    Idle,
    Jumping,
    AttackKnight
}
namespace SpriteKind {
    export const weapon = SpriteKind.create()
    export const weaponsgohere = SpriteKind.create()
}
function hypotenuse (a: number, b: number) {
    return Math.sqrt(a ** 2 + b ** 2)
}
function CalSpriteDis (Start: Sprite, End: Sprite) {
    xdistance = Start.x - End.x
    ydistance = Start.y - End.y
    return Math.sqrt(xdistance ** 2 + ydistance ** 2)
}
let Musicfinished = false
let mySprite2: Sprite = null
let ydistance = 0
let xdistance = 0
game.setDialogFrame(assets.image`frame`)
game.setDialogCursor(assets.image`coincursor`)
scene.setBackgroundImage(assets.image`82x0`)
let mySprite = sprites.create(assets.image`Knight_dogeidle`, SpriteKind.Player)
controller.moveSprite(mySprite)
let anim = animation.createAnimation(ActionKind.Walking, 100)
animation.setAction(mySprite, ActionKind.Walking)
animation.attachAnimation(mySprite, anim)
anim.addAnimationFrame(assets.image`Knight_dogeidle`)
anim.addAnimationFrame(assets.image`Knight_dogeforward`)
anim.addAnimationFrame(assets.image`Knight_dogeidle`)
anim.addAnimationFrame(assets.image`Knight_dogebackward`)
mySprite.setPosition(80, 60)
/**
 * Unused code for path finder
 */
game.onUpdate(function () {
	
})
game.onUpdateInterval(0.1, function () {
    if (controller.A.isPressed() && controller.right.isPressed()) {
        mySprite2 = sprites.createProjectileFromSprite(assets.image`SWordiconfacingupright`, mySprite, 50, 0)
        pause(100)
    } else if (controller.A.isPressed() && controller.left.isPressed()) {
        mySprite2 = sprites.createProjectileFromSprite(assets.image`SWordiconfacingupleft`, mySprite, -50, 0)
        pause(100)
        sprites.destroy(mySprite2)
    } else if (mySprite.vy > 0) {
    	
    } else if (mySprite.vy < 0) {
    	
    }
})
forever(function () {
    if (Musicfinished == true) {
        Musicfinished = false
        music.setVolume(99)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(415, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(415, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(415, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        Musicfinished = true
    }
})
