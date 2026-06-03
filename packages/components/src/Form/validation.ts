import { formatString } from "@quen-ui/helpers";
import type {
  IFormFieldError,
  IFormConfigField
} from "./types";
import { ruleValidators } from "./helpers";
import type { defaultValidateMessages } from "./defaultValidateMessages";

export const validateFieldValue = async <T extends Record<string, any>>(
  value: any,
  values: T,
  fieldName: string,
  config: IFormConfigField<T>,
  validateMessages: typeof defaultValidateMessages
): Promise<IFormFieldError<T>> => {
  const errors: string[] = [];

  if (config.validate) {
    const customError = await config.validate(value, values);
    if (customError) errors.push(...customError);
  }

  const rules = config.rules ?? [];
  for (const rule of rules) {
    if (rule.required && (value === "" || value == null)) {
      errors.push(
        formatString(rule.message ?? validateMessages.required, {
          name: fieldName
        })
      );
    }
    if (rule.type) {
      const validator = ruleValidators[rule.type];
      if (validator && !validator(value)) {
        errors.push(
          formatString(rule.message ?? validateMessages.types[rule.type], {
            name: fieldName,
            type: rule.type
          })
        );
      }
    }
    if (rule.minLength && String(value).length < rule.minLength) {
      errors.push(
        formatString(rule.message ?? validateMessages.string.min, {
          name: fieldName,
          min: rule.minLength
        })
      );
    }
    if (rule.maxLength && String(value).length > rule.maxLength) {
      errors.push(
        formatString(rule.message ?? validateMessages.string.max, {
          name: fieldName,
          max: rule.maxLength
        })
      );
    }
    if (rule.pattern && !rule.pattern.test(String(value))) {
      errors.push(
        formatString(rule.message ?? validateMessages.pattern.mismatch, {
          name: fieldName,
          pattern: rule.pattern
        })
      );
    }
  }

  return {
    name: fieldName as any,
    errors,
    warnings: []
  };
};
