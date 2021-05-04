namespace SpriteKind {
    export const wall = SpriteKind.create()
    export const nice = SpriteKind.create()
    export const talker = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.nice, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.destroy(effects.fire, 500)
    scene.cameraShake(5, 500)
    music.zapped.playUntilDone()
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`bullet`, cannon, 50, randint(-20, 20))
    music.bigCrash.playUntilDone()
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    sprite.destroy(effects.fire, 500)
    music.pewPew.playUntilDone()
    info.changeScoreBy(1)
})
let random = 0
let nice_people: Sprite = null
let knight: Sprite = null
let projectile: Sprite = null
let cannon: Sprite = null
let _is = randint(0, 917841893574384)
info.setLife(5)
cannon = sprites.create(assets.image`cannon`, SpriteKind.Player)
cannon.setPosition(7, 59)
scene.setBackgroundColor(6)
controller.moveSprite(cannon, 0, 100)
cannon.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    knight = sprites.create(assets.image`knight`, SpriteKind.Enemy)
    knight.setVelocity(-50, 0)
    knight.setPosition(162, randint(0, 200))
    knight.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(1000, function () {
    nice_people = sprites.create(assets.image`nice guy`, SpriteKind.nice)
    nice_people.setVelocity(-50, 0)
    nice_people.setPosition(162, randint(0, 200))
    nice_people.setFlag(SpriteFlag.AutoDestroy, true)
})
forever(function () {
    random = randint(0, 917841893574384)
    pause(5000)
})
forever(function () {
    if (random == _is) {
        info.changeScoreBy(100000)
    }
})
