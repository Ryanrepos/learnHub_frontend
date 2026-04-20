import { StyledCategoryExplorer } from "./CategoryExplorer.ts";
import { useGetCategories } from "@/composables/useLogin";

export default function CategoryExplorer() {
    const { data, isLoading } = useGetCategories();
    const categories = data?.data?.items || [];

    if (isLoading) return <div>Loading...</div>;

    return (
        <StyledCategoryExplorer>
            <div className="section-header">
                <h2 className="section-title">Category Explorer</h2>
                <p className="section-subtitle">Explore by category or follow a step-by-step learning journey.</p>
            </div>

            <div className="categories-grid">
                {categories.map((category: any) => (
                    <div key={category.id} className="category-card">
                        <h3 className="category-title">{category.name}</h3>
                        <p className="category-description">{category.description}</p>
                    </div>
                ))}
            </div>
        </StyledCategoryExplorer>
    );
}