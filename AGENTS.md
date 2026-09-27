# Project agent instructions

## Mandatory cross-device and bilingual consistency

Owner requirement: every future website design change or feature must be consistent across mobile, tablet and laptop. Consistency means shared identity, equivalent content and complete functionality, with intentionally adapted layouts and input behavior; it does not mean shrinking desktop or forcing identical layouts.

Before UI work, read `docs/DEVICE_EXPERIENCE_GUIDE.md` and the relevant current plan in `docs/audit-2026-09-26/MASTER-PLAN-V2-AR.md`. Read `docs/PROJECT_RULES.md` for context, but verify its historical observations against current code. The audit/plan is not authorization to implement or publish every proposed feature; honor the user's current task scope.

For every changed website component or flow:

- Specify mobile, tablet and laptop behavior, both Arabic/RTL and English/LTR, and loading/empty/error/success states where applicable.
- Preserve all essential content and actions on touch and keyboard. Hover, cursor following and parallax are optional enhancements, never prerequisites for reading, navigation or opening controls.
- Base input enhancements on hover/pointer capability and actual input when relevant, not viewport width alone. Include hybrid tablets and reduced-motion behavior.
- Reuse documented color/type/spacing/navigation primitives. Do not introduce an isolated visual style or fix clipping by hiding essential overflow.
- Validate affected routes at representative 390px mobile, 768px tablet and 1366px laptop widths in both languages; add 320px, landscape, short height and zoom checks when layout risk applies. Record exact tested sizes and remaining limitations.
- Include screenshots or equivalent observable evidence for visual changes and meaningful interaction tests for behavior changes. Test touch, keyboard and pointer paths relevant to the feature. Real iOS/Safari and Android checks are release requirements; report unavailable coverage honestly.
- Verify responsive media, contrast, focus, touch targets and performance impact. Do not claim completion because build passes or desktop looks correct.
- Account/customer data, mail sending credentials and privileged authorization belong in secured server/database logic; do not trust user-editable metadata as administrative authority.
- Do not replace uncommitted owner changes or deploy an older branch over newer live work. Preserve a rollback path and verify the actual published result when deployment is authorized.

These are implementation and review gates, not a requirement to ask the owner for permission on every routine edit. Documentation-only and operational changes without UI impact do not need artificial screenshot tests.
