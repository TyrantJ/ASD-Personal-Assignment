package jetbrains.kotlin.course.alias.util

// in jetbrains.kotlin.course.alias.util package
typealias Identifier = Int

class IdentifierFactory(private var counter: Int = 0) {
    fun uniqueIdentifier(): Identifier {
        return ++counter
    }
}