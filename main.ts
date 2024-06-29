enum ActionKind {
    Walking,
    Idle,
    Jumping,
    AttackKnight
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GAmestartcheck == true) {
        Gamestartcheck()
    }
})
function Start_screen () {
    game.setDialogFrame(assets.image`frame`)
    game.setDialogCursor(assets.image`coincursor`)
    scene.setBackgroundImage(assets.image`82x0`)
    Logo = sprites.create(assets.image`Logo`, SpriteKind.Text)
    Logo_TOp = sprites.create(assets.image`kingdom`, SpriteKind.Text)
    Logo_TOp.setPosition(80, 20)
    game.showLongText("Press A to start", DialogLayout.Bottom)
    GAmestartcheck = true
}
function Gamestartcheck () {
    Logo.setStayInScreen(false)
    Logo_TOp.setStayInScreen(false)
    Logo.setFlag(SpriteFlag.GhostThroughWalls, true)
    Logo_TOp.setFlag(SpriteFlag.GhostThroughWalls, true)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    mySprite = sprites.create(assets.image`BLueknight`, SpriteKind.Player)
    anim = animation.createAnimation(ActionKind.Walking, 500)
    animation.setAction(mySprite, ActionKind.Walking)
    animation.attachAnimation(mySprite, anim)
    anim.addAnimationFrame(assets.image`BLueknight`)
    anim.addAnimationFrame(assets.image`BLueknight2`)
    anim.addAnimationFrame(assets.image`BLueknight`)
    anim.addAnimationFrame(assets.image`BLueknight3`)
}
let anim: animation.Animation = null
let mySprite: Sprite = null
let Logo_TOp: Sprite = null
let Logo: Sprite = null
let GAmestartcheck = false
let Musicfinished = true
Start_screen()
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
