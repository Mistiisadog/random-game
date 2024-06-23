function Start_screen () {
    Logo = sprites.create(assets.image`Logo`, SpriteKind.Text)
    Logo_TOp = sprites.create(img`
        bbbd.........dbbbbbb.bbbbd....bbbbd............bbbb..........dbbbbbbbbbbbbbbbbbbb..bbbbbbbbbbbbbbbbbd................ddbbbbd.........dbbbb................dbbbb
        fffb........bfffffcd.cfffb....fffffd..........dffffd.......bcfffffffffffffffffffb..ffffffffffffffffffcb............dcfffffffcb.......bffffb...............cffff
        fffb......dcfffffb...cfffb....fffffcd.........dffffd.....dcffffffffffffffffffffc...ffffffffffffffffffffcd.........bfffffffffffcd.....bfffff..............dfffff
        fffb.....bfffffcd....cfffb....ffffffcd........dffffd....bffffffffffffffffffffffb...ffffffffffffffffffffffd.......bffffffffffffffd....bfffffb.............cfffff
        fffb....cfffffcd.....cfffb....fffffffc........dffffd...dfffffffcccccccccccccccc....ffffccccccccccccfffffffd.....bfffffffccfffffffd...bffffffd...........bffffff
        fffb..dcfffffb.......cfffb....ffffffffb.......dffffd..dcffffcb.....................ffffd...........dbcffffc....dfffffcd...dbcffffc...bffffffc...........cffffff
        fffb.bfffffcd........cfffb....fffffffffb......dffffd..bffffc.......................ffffd.............dcffffd...cffffb.......dcffffd..bfffffffd.........bfffffff
        fffccfffffb..........cfffb....ffffbfffffb.....dffffd..cfffc........................ffffd..............dffffc..dffffc.........dffffc..bfffffffc........dffffffff
        ffffffffcd...........cfffb....ffffdbfffffd....dffffd.dffffb.....ddddddddddd........ffffd...............bffffd.bffffd..........bffffd.bffffffffd.......bffffffff
        fffffffcd............cfffb....ffffd.bffffcd...dffffd.bffffd....dffffffffffc........ffffd...............dffffd.cfffc...........dffffd.bffffcfffc......dffffcffff
        ffffffb..............cfffb....ffffd..cffffc...dffffd.bfffc.....dfffffffffffb.......ffffd................ffffb.cfffb............ffffb.bffffbffffb.....cffffbffff
        ffffffd..............cfffb....ffffd...cffffc..dffffd.bfffc.....dffffffffffffd......ffffd................ffffb.cfffb............ffffb.bffffdcfffc....dffffbbffff
        fffffffb.............cfffb....ffffd...dcffffb.dffffd.bffffd....dcfffffffffffb......ffffd...............dffffd.cfffc...........dffffd.bffffddffffd...cffff.bffff
        ffffffffcd...........cfffb....ffffd....dfffffbdffffd.dffffd.............bffffd.....ffffd...............bffffd.bffffd..........bffffd.bffffd.cffff..dffffb.bffff
        fffccfffffb..........cfffb....ffffd.....dfffffbffffd..ffffc..............cfffc.....ffffd..............dffffc..dffffb.........dcfffc..bffffd.bffffb.cffffd.bffff
        fffb.cfffffc.........cfffb....ffffd......bfffffffffd..bffffc.............dffffd....ffffd..............cffffd...cffffb........cffffd..bffffd..cfffcdffffb..bffff
        fffb..bfffffcb.......cfffb....ffffd.......bffffffffd..dfffffcd............cfffc....ffffd............bcffffc....dfffffcd....bcffffc...bffffd..dfffffffffd..bffff
        fffb...dcfffffb......cfffb....ffffd........cfffffffd...bffffffcccccccccccccffffb...ffffccccccccccccfffffffd.....cffffffcccfffffffd...bffffd...cfffffffb...bffff
        fffb.....bfffffcd....cfffb....ffffd.........cffffffd....bffffffffffffffffffffffc...ffffffffffffffffffffffd.......cffffffffffffffd....bffffd...bfffffffd...bffff
        fffb......dcfffffb...cfffb....ffffd.........dcfffffd.....bffffffffffffffffffffffb..ffffffffffffffffffffcd.........bfffffffffffcd.....bffffd....cfffffb....bffff
        fffb........cfffffcd.cfffb....ffffd..........dfffffd......dbfffffffffffffffffffff..fffffffffffffffffffb............dcffffffffb.......bffffd....bfffffd....bffff
        cccd.........bcccccb.bcccd....bcccd...........dccccd........dbbccccccccccccccffffb.bcccccccccccccccbd................dbbccbd.........dcccc......bcccb.....dcccc
        .............................................................................bfffc.............................................................................
        ..............................................................................cfffb............................................................................
        ..............................................................................bffffd...........................................................................
        ...............................................................................bcccb...........................................................................
        `, SpriteKind.Text)
    Logo_TOp.setPosition(80, 20)
    game.setDialogFrame(img`
        .3333333333333333333333.
        355344994499449944993553
        355394499449944994493553
        333333333333333333333333
        399331111111111111133943
        394311111111111111113443
        344311111111111111113493
        349311111111111111113993
        399311111111111111113943
        394311111111111111113443
        344311111111111111113493
        349311111111111111113993
        399311111111111111113943
        394311111111111111113443
        344311111111111111113493
        349311111111111111113993
        399311111111111111113943
        394311111111111111113443
        344311111111111111113493
        349331111111111111133993
        333333333333333333333333
        355394499449944994493553
        355399449944994499443553
        .3333333333333333333333.
        `)
    game.setDialogCursor(img`
        . . b b b . . 
        . b 5 5 5 b . 
        b 5 d 3 d 5 b 
        b 5 1 5 3 5 b 
        c d 1 5 3 5 c 
        c d d 1 d 5 c 
        . f d d d f . 
        . . f f f . . 
        `)
    game.showLongText("Press A to start", DialogLayout.Bottom)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Gamestartcheck()
})
function Gamestartcheck () {
    sprites.destroy(Logo, effects.spray, 500)
    sprites.destroy(Logo_TOp, effects.spray, 500)
}
let Logo_TOp: Sprite = null
let Logo: Sprite = null
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
