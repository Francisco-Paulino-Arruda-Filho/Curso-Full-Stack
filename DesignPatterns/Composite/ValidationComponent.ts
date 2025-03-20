export abstract class ValidateComponent {
  abstract validate(value: unknown)
}

export class ValidateString extends ValidateComponent {
  validate(value: unknown) {
      return typeof value === 'string'
  }
}

export class ValidateNumber extends ValidateComponent {
  validate(value: unknown) {
      return typeof value === 'number'
  }
}
